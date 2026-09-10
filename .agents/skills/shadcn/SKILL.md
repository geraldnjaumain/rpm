---
name: shadcn
description: Guidance on configuring, installing, and customizing shadcn/ui components adhering to the project's strict borderless Apple design system rules.
---

# shadcn/ui Component Skill

## Component Installation & Usage
- Components are initialized using `npx shadcn@latest`.
- All components must be customized to adhere to the project's design system:
  1. Remove all borders (`border`, `border-border`, `border-input`, etc.). Use dark surface contrast (`bg-neutral-900`, `#1c1c1e`, `#2c2c2e`) for separation.
  2. Maximum border-radius is 8px (`rounded-[8px]` or `rounded-md`), else fully rounded (`rounded-full`). Never use radii between 8px and fully rounded.
  3. No purple colors or accents. Use neutral grayscale palette.
  4. No glows, box-shadow rings, or glassmorphism (no `backdrop-blur` fake glass).
  5. Replace standard tabs with Apple-style traditional Segmented Controls.
  6. Buttons must never be tinted; use solid neutral white/gray or dark neutral backgrounds with subtle press/ripple feedback.
