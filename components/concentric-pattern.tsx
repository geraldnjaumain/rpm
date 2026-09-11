"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ConcentricPatternProps
  extends Omit<React.CanvasHTMLAttributes<HTMLCanvasElement>, "color"> {
  shape?: 0 | 1 | 2 | 3 // 0: Triangle, 1: Circle, 2: Square, 3: Lines
  ringCount?: number
  falloff?: number
  inverseFalloff?: boolean
  color?: { r: number; g: number; b: number; a: number }
  offset?: number
  transform?: {
    x?: number
    y?: number
    radius?: number
    angle?: number
  }
}

export function ConcentricPattern({
  shape = 0,
  ringCount = 20,
  falloff = 1,
  inverseFalloff = false,
  color = { r: 185 / 255, g: 109 / 255, b: 59 / 255, a: 0.85 }, // #B96D3B
  offset = 0,
  transform = { x: 50, y: 50, radius: 50, angle: 0 },
  className,
  ...props
}: ConcentricPatternProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let isDestroyed = false
    let animationFrameId: number

    // Parameters
    const currentShape = shape
    const currentRingCount = Math.max(1, ringCount)
    const currentFalloff = Math.min(5, Math.max(0, falloff))
    const currentInverseFalloff = inverseFalloff ? 1 : 0
    const currentColor = [
      Math.min(1, Math.max(0, color.r)),
      Math.min(1, Math.max(0, color.g)),
      Math.min(1, Math.max(0, color.b)),
      Math.min(1, Math.max(0, color.a)),
    ]
    const currentOffset = Math.min(1, Math.max(0, offset))
    const currentTransform = {
      x: transform.x ?? 50,
      y: transform.y ?? 50,
      radius: Math.min(250, Math.max(0.1, transform.radius ?? 50)),
      angle: transform.angle ?? 0,
    }

    const zoom = currentTransform.radius / 50
    const rotation = (-currentTransform.angle * Math.PI) / 180
    const cosine = Math.cos(rotation)
    const sine = Math.sin(rotation)

    function initWebGL() {
      if (!canvas || isDestroyed) return false
      const gl = (canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")) as WebGLRenderingContext | WebGL2RenderingContext | null

      if (!gl) return false

      const isWebGL2 = "WebGL2RenderingContext" in window && gl instanceof WebGL2RenderingContext
      if (!isWebGL2) {
        gl.getExtension("OES_standard_derivatives")
      }

      const vsSource = isWebGL2
        ? `#version 300 es
in vec2 a_pos;
in vec2 a_uv;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
  v_uv = a_uv;
}`
        : `attribute vec2 a_pos;
attribute vec2 a_uv;
varying vec2 v_uv;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
  v_uv = a_uv;
}`

      const fsSource = isWebGL2
        ? `#version 300 es
precision highp float;
uniform vec4 u_pattern;
uniform vec4 u_color;
uniform vec4 u_transform;
uniform vec4 u_geometry;
in vec2 v_uv;
out vec4 fragColor;

float shapeDistance(vec2 p, int shape) {
  if (shape == 0) { return max(p.y, (sqrt(3.0) * abs(p.x) - p.y) * 0.5); }
  if (shape == 1) { return length(p); }
  if (shape == 2) { return max(abs(p.x), abs(p.y)); }
  return p.y;
}

void main() {
  int shape = int(u_pattern.x + 0.5);
  float ringCount = u_pattern.y;
  float falloff = u_pattern.z;
  bool inverseFalloff = u_pattern.w >= 0.5;
  vec4 color = u_color;
  float zoom = max(u_transform.x, 0.0001);
  float cosine = u_transform.y;
  float sine = u_transform.z;
  float offset = u_transform.w;
  float aspect = u_geometry.x;
  vec2 centerUv = u_geometry.yz / 100.0;
  vec2 position = (v_uv - centerUv) / zoom;
  position.x *= aspect;
  vec2 rotatedPosition = vec2(cosine * position.x - sine * position.y, sine * position.x + cosine * position.y);
  float distance = shapeDistance(rotatedPosition, shape);
  float scaledDistance = distance * ringCount;
  float ringPosition = fract(scaledDistance + offset);
  
  float fw = fwidth(scaledDistance);
  float blendWidth = min(fw * 1.5, 0.2499);
  float lineThickness = max(0.5 * fw, 0.001);
  
  float leadingEdge = smoothstep(0.0, blendWidth, ringPosition);
  float trailingEdge = smoothstep(lineThickness, lineThickness + blendWidth, ringPosition);
  float band = leadingEdge * (1.0 - trailingEdge);
  
  float normalFalloff = exp(-length(position) * falloff);
  float fade = normalFalloff;
  if (inverseFalloff) { fade = 1.0 - normalFalloff; }
  float alpha = band * fade * color.a;
  vec3 bg = vec3(13.0 / 255.0, 31.0 / 255.0, 45.0 / 255.0);
  fragColor = vec4(mix(bg, color.rgb, alpha), 1.0);
}`
        : `#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec4 u_pattern;
uniform vec4 u_color;
uniform vec4 u_transform;
uniform vec4 u_geometry;
varying vec2 v_uv;

float shapeDistance(vec2 p, int shape) {
  if (shape == 0) { return max(p.y, (sqrt(3.0) * abs(p.x) - p.y) * 0.5); }
  if (shape == 1) { return length(p); }
  if (shape == 2) { return max(abs(p.x), abs(p.y)); }
  return p.y;
}

void main() {
  int shape = int(u_pattern.x + 0.5);
  float ringCount = u_pattern.y;
  float falloff = u_pattern.z;
  bool inverseFalloff = u_pattern.w >= 0.5;
  vec4 color = u_color;
  float zoom = max(u_transform.x, 0.0001);
  float cosine = u_transform.y;
  float sine = u_transform.z;
  float offset = u_transform.w;
  float aspect = u_geometry.x;
  vec2 centerUv = u_geometry.yz / 100.0;
  vec2 position = (v_uv - centerUv) / zoom;
  position.x *= aspect;
  vec2 rotatedPosition = vec2(cosine * position.x - sine * position.y, sine * position.x + cosine * position.y);
  float distance = shapeDistance(rotatedPosition, shape);
  float scaledDistance = distance * ringCount;
  float ringPosition = fract(scaledDistance + offset);
  #ifdef GL_OES_standard_derivatives
  float fw = fwidth(scaledDistance);
  float blendWidth = min(fw * 1.5, 0.2499);
  float lineThickness = max(0.5 * fw, 0.001);
  #else
  float blendWidth = 0.02;
  float lineThickness = 0.01;
  #endif
  float leadingEdge = smoothstep(0.0, blendWidth, ringPosition);
  float trailingEdge = smoothstep(lineThickness, lineThickness + blendWidth, ringPosition);
  float band = leadingEdge * (1.0 - trailingEdge);
  float normalFalloff = exp(-length(position) * falloff);
  float fade = normalFalloff;
  if (inverseFalloff) { fade = 1.0 - normalFalloff; }
  float alpha = band * fade * color.a;
  vec3 bg = vec3(13.0 / 255.0, 31.0 / 255.0, 45.0 / 255.0);
  gl_FragColor = vec4(mix(bg, color.rgb, alpha), 1.0);
}`

      const createShader = (type: number, src: string) => {
        const shader = gl.createShader(type)
        if (!shader) return null
        gl.shaderSource(shader, src)
        gl.compileShader(shader)
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error("Shader error:", gl.getShaderInfoLog(shader))
          gl.deleteShader(shader)
          return null
        }
        return shader
      }

      const vs = createShader(gl.VERTEX_SHADER, vsSource)
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource)
      if (!vs || !fs) return false

      const program = gl.createProgram()
      if (!program) return false
      gl.attachShader(program, vs)
      gl.attachShader(program, fs)
      gl.linkProgram(program)

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(program))
        return false
      }

      gl.useProgram(program)

      const vertexBuffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          -1, -1, 0, 1,
           1, -1, 1, 1,
          -1,  1, 0, 0,
          -1,  1, 0, 0,
           1, -1, 1, 1,
           1,  1, 1, 0,
        ]),
        gl.STATIC_DRAW
      )

      const posAttr = gl.getAttribLocation(program, "a_pos")
      const uvAttr = gl.getAttribLocation(program, "a_uv")
      gl.enableVertexAttribArray(posAttr)
      gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 16, 0)
      gl.enableVertexAttribArray(uvAttr)
      gl.vertexAttribPointer(uvAttr, 2, gl.FLOAT, false, 16, 8)

      const uPattern = gl.getUniformLocation(program, "u_pattern")
      const uColor = gl.getUniformLocation(program, "u_color")
      const uTransform = gl.getUniformLocation(program, "u_transform")
      const uGeometry = gl.getUniformLocation(program, "u_geometry")

      const render = () => {
        if (isDestroyed || !canvas) return
        const width = Math.max(1, canvas.width)
        const height = Math.max(1, canvas.height)
        const aspect = width / height

        gl.viewport(0, 0, width, height)
        gl.uniform4f(uPattern, currentShape, currentRingCount, currentFalloff, currentInverseFalloff)
        gl.uniform4f(uColor, currentColor[0], currentColor[1], currentColor[2], currentColor[3])
        gl.uniform4f(uTransform, zoom, cosine, sine, currentOffset)
        gl.uniform4f(uGeometry, aspect, currentTransform.x, currentTransform.y, 0)

        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }

      const resize = () => {
        if (!canvas) return
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        const displayWidth = Math.round((canvas.clientWidth || 800) * dpr)
        const displayHeight = Math.round((canvas.clientHeight || 600) * dpr)
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
          canvas.width = displayWidth
          canvas.height = displayHeight
        }
        render()
      }

      resize()
      animationFrameId = requestAnimationFrame(resize)

      const resizeObserver = new ResizeObserver(() => resize())
      resizeObserver.observe(canvas)

      return true
    }

    initWebGL()

    return () => {
      isDestroyed = true
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [shape, ringCount, falloff, inverseFalloff, color, offset, transform])

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full block select-none", className)}
      {...props}
    />
  )
}
