---
name: shaders
description: Guidelines and conventions for WebGL and Canvas shaders within the Apple-inspired dark aesthetic.
---

# Shader Guidelines

## Requirements
1. **Subtle & Tasteful**: Ambient shaders must remain low-contrast, subtle, and unobtrusive.
2. **Strict Color Palette**: Shaders must strictly adhere to neutral monochrome darks (`#000000` to `#2c2c2e` with subtle white/neutral alpha). Never use purple, neon, or vivid color tints.
3. **Performance**: Shaders must use `requestAnimationFrame` with proper cleanup on unmount, low GPU overhead, and respect `prefers-reduced-motion`.
4. **No Glows / No Glass**: Do not simulate neon halos, heavy glow post-processing, or fake frosted glass.
