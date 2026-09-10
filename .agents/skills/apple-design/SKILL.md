---
name: apple-design
description: Strict guidelines for implementing Apple Human Interface Guidelines (HIG) aesthetic in dark mode.
---

# Apple Design System Guidelines

## Core Principles
1. **Dark Theme Only**: Default and strictly dark mode throughout. Base surface is `#000000`, elevated cards `#1c1c1e`, secondary surfaces `#2c2c2e`, tertiary `#3a3a3c`.
2. **Zero Borders**: Never use borders (`border-0`, `border-none`). Differentiate depth via tonal contrast between surfaces.
3. **Border Radius**: Maximum 8px (`rounded-[8px]` / `rounded-md`) OR fully rounded (`rounded-full`). Never use values between 8px and fully rounded.
4. **No Tinted Buttons**: Buttons must be monochrome neutral (e.g. system white, `#2c2c2e`, subtle press state).
5. **No Purple**: Absolutely no purple in any styles, SVG fills, or components.
6. **No Tints & No Glows**: Avoid neon glows, colored drop-shadows, and tints.
7. **No Glassmorphism**: Avoid faux-glass, frosted glass borders, and excessive blur overlays.
8. **No Uppercase**: All text on the site is strictly lowercase.
9. **Typography**: Never use serif fonts. Use Apple system sans-serif (`-apple-system`, `BlinkMacSystemFont`, `SF Pro`, `system-ui`).
10. **Icons in Cards**: Never add a background or container around icons inside cards.
11. **Avatars**: Never use letters or initials. Always assign avatars using Dicebear API (`https://api.dicebear.com/9.x/...`).
12. **Animations**: Subtle, tasteful, and fast (150-250ms). Never use pulsating animations (`animate-pulse`). Include subtle ripple/press interactions.
13. **Loading Spinners**: Use dot-activated spinners (sequential circular or linear dots lighting up), supporting both determinate and indeterminate modes.
14. **Tabs**: Use traditional Apple Segmented Control tabs.
15. **Error Handling**: Dismissible errors must use toasts. Errors requiring user action must use inline alerts or modal dialogs.
16. **Minimalism**: Avoid unnecessary complexity, clutter, and verbose text.
