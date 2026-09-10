<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Leethe Design System & Development Guidelines

These rules are mandatory and must be strictly followed for all code and design in this repository:

1. **Solar Icons Only (`duoutline` variant)**:
   - We only use Solar icons, specifically the `duoutline` (`line-duotone`) variant.
   - Absolutely no other icon type or library (no Lucide, no Heroicons, no FontAwesome).
   - No other variant of Solar icons (no bold, linear, broken, or outline).
   - Always import from `@s9-labs/solar-icons/line-duotone`.
   - Never use sparkle, star, magic, or flash/lightning icons.
   - Never place backgrounds or container pills on icons inside a card; icons must sit directly on the card surface.

2. **Zero Borders & Blue-Derived Palette**:
   - We shall NOT use borders anywhere (`border-0`, `border-none`).
   - Surfaces are delineated solely through Apple-style subtle tonal background contrast.
   - Blacks and grays must be derived from blue using this exact palette:
     - `#0D1F2D`: Midnight Navy (base canvas background)
     - `#132637`: Deep Navy (elevated cards and container surfaces)
     - `#193146`: Slate Navy (secondary surfaces, controls, inputs, and track states)
     - `#203C55`: Highlight Navy (hover, focus, and active press states)
     - `#9EA3B0`: Slate Blue (secondary / muted typography and subtle accents)
     - `#E4C3AD`: Almond Peach (brand accent, primary actions, and active indicator line)
     - `#FAE1DF`: Soft Blush / Cream (primary foreground typography)

3. **No Tinted Buttons**:
   - Primary buttons use the accent `#E4C3AD` with `#0D1F2D` text; secondary and outline buttons use `#193146` with `#FAE1DF` text and `#203C55` hover state.

4. **Minimal Custom Classnames**:
   - Keep custom classnames to a minimum; always prefer Tailwind primitives and utility classes.

5. **Apple Design System**:
   - Follow Apple Design System (HIG) dark mode aesthetic.
   - High legibility, clean spacing, subtle depth, refined interactive feedback.
   - Customize all UI components to look and feel like Apple design.

6. **Border Radius Rule**:
   - Maximum border radius is 8px (`rounded-[8px]` / `rounded-md`), OR fully rounded (`rounded-full`).
   - Never use border radii between 8px and fully rounded.

7. **No Glows**:
   - No neon glows, no colored drop shadows, and no blurred glow effects.

8. **No Purple**:
   - Strictly no purple colors, gradients, tints, or accents anywhere.

9. **No Background Animations**:
   - Strictly no background canvas, shader, or ambient moving background animations. Clean, solid, refined dark surfaces.

10. **Ripple Animations**:
    - Interactive elements must use subtle, tasteful Apple-style press/ripple feedback.

11. **Dark Themed**:
    - Default and strictly dark themed across the entire application using the blue-derived dark palette.

12. **No Uppercase**:
    - Strictly no uppercase on the site; all text must be lowercase.

13. **No Branding / Logo on UI**:
    - Logo and branding on the site is not to be displayed unless explicitly requested.

14. **Avatars via Dicebear API**:
    - Never use letters/initials to represent user avatars.
    - Always assign an avatar using the Dicebear API (e.g., `https://api.dicebear.com/9.x/...`).

15. **No Glassmorphism**:
    - No fake frosted glass or backdrop-blur borders. Solid, refined dark surfaces.

16. **Minimalism**:
    - Avoid unnecessary complexity; avoid too much text; only add text when necessary.

17. **No Pulsating Animations**:
    - No pulsating animations (`animate-pulse`, pulsing dots, or pulsing skeletons).

18. **Custom Spinners**:
    - Dot-activated spinner where sequential dots light up (Apple style activity indicator).
    - Must provide both determinate and indeterminate loading spinners.

19. **No Serif Fonts**:
    - Never use a serif font on the site. Use Apple system sans-serif typography.

20. **Error Handling**:
    - If the error is dismissible, use toast notifications with refined animations.
    - If the error requires user action, use an inline alert or a modal dialog.

21. **Conventional Tabs**:
    - Never use shadcn default floating pill box tabs.
    - Use conventional horizontal tabs (open baseline with `#E4C3AD` active underline indicator or docked folder tabs).

22. **Skills Installation**:
    - Before using a certain technology or package, install the skill in `.agents/skills/`.

23. **Subtle & Tasteful Animations**:
    - Keep animations subtle, fast (150–250ms), and tasteful.

