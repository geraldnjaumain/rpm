"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ShaderCanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  speed?: number
  intensity?: number
}

export function ShaderCanvas({
  speed = 0.001,
  intensity = 0.15,
  className,
  ...props
}: ShaderCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl")
    if (!gl) return

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    // Subtle Apple monochrome ambient wave shader (no purple, no glows, no tints)
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_intensity;

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.4;
        float wave1 = sin(st.x * 2.0 + t + sin(st.y * 3.0 + t * 0.5));
        float wave2 = cos(st.y * 2.5 - t * 0.8 + cos(st.x * 2.0 - t * 0.3));
        float combined = (wave1 + wave2) * 0.5;

        // Strictly neutral Apple dark tones (from black to deep gray, max alpha 0.08)
        float brightness = smoothstep(-1.0, 1.0, combined) * u_intensity;
        vec3 color = vec3(0.08, 0.08, 0.09) + vec3(0.12) * brightness;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource)
    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    gl.useProgram(program)

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )

    const posAttr = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(posAttr)
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0)

    const resUniform = gl.getUniformLocation(program, "u_resolution")
    const timeUniform = gl.getUniformLocation(program, "u_time")
    const intensityUniform = gl.getUniformLocation(program, "u_intensity")

    let animationFrameId: number
    let startTime = performance.now()

    const resize = () => {
      const displayWidth = canvas.clientWidth
      const displayHeight = canvas.clientHeight
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth
        canvas.height = displayHeight
        gl.viewport(0, 0, canvas.width, canvas.height)
      }
    }

    const render = () => {
      resize()
      const elapsed = (performance.now() - startTime) * speed
      gl.uniform2f(resUniform, canvas.width, canvas.height)
      gl.uniform1f(timeUniform, elapsed)
      gl.uniform1f(intensityUniform, intensity)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      gl.deleteBuffer(positionBuffer)
    }
  }, [speed, intensity])

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 size-full select-none", className)}
      {...props}
    />
  )
}
