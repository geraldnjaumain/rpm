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
     - `#B96D3B`: Caramel Amber / Terracotta (brand accent, primary actions, and active indicator line)
     - `#FFFFFF`: Pure White (primary foreground typography)

3. **No Tinted Buttons**:
   - Primary buttons use the accent `#B96D3B` with `#0D1F2D` text; secondary and outline buttons use `#193146` with `#FFFFFF` text and `#203C55` hover state.

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
    - Use conventional horizontal tabs (open baseline with `#B96D3B` active underline indicator or docked folder tabs).

22. **Skills Installation**:
    - Before using a certain technology or package, install the skill in `.agents/skills/`.

23. **Subtle & Tasteful Animations**:
    - Keep animations subtle, fast (150–250ms), and tasteful.

24. **Custom 404 Page**:
    - Every project must include a custom-designed `not-found` page that matches the site's design system.
    - Never rely on the framework default 404 page.

25. **Per-Page Meta Titles**:
    - Every page and route must set a unique, descriptive `<title>` and meta description.
    - Use the framework's metadata API (e.g., Next.js `metadata` export or `generateMetadata`).

26. **CTA Above the Fold**:
    - The primary call-to-action must be visible above the fold on every landing/hero section without scrolling.

27. **Favicon Set**:
    - Every project must include a complete favicon set: `favicon.ico`, `apple-touch-icon.png`, and `site.webmanifest`.
    - Never ship a project without favicons configured.

28. **robots.txt**:
    - Every project must include a `robots.txt` file at the public root with appropriate crawl directives.

29. **sitemap.xml**:
    - Every project must generate a `sitemap.xml` (static or dynamic) listing all public routes.
    - Use the framework's built-in sitemap generation where available.

30. **RSS Feed**:
    - If the project includes a blog, newsletter, or any regularly updating content section, an RSS/Atom feed endpoint must be provided.

31. **Open Graph Image**:
    - Every page must include an Open Graph image (`og:image`) for social media previews.
    - Use a default site-wide OG image as a fallback; individual pages should override with contextual images where possible.

32. **Alt Text on Every Image**:
    - Every `<img>`, `<Image>`, or image element must have descriptive, meaningful `alt` text.
    - Decorative images must use `alt=""` with `aria-hidden="true"`.

33. **Mobile Breakpoints**:
    - All layouts must be fully responsive with explicit handling for mobile (`< 640px`), tablet (`640px–1024px`), and desktop (`> 1024px`) breakpoints.
    - Mobile-first design approach; never ship desktop-only layouts.

34. **Sticky Mobile CTA**:
    - On mobile viewports, the primary CTA must be sticky (fixed to the bottom of the viewport) so it remains accessible while scrolling.

35. **Loading States**:
    - Every async operation (data fetch, form submission, navigation) must display a visible loading state using the project's custom spinner (rule 18).
    - Never leave the user staring at a blank or frozen screen.

36. **Form Error States**:
    - All form fields must display inline validation errors with clear, helpful messages.
    - Error states must be visually distinct using the design system palette (never red unless explicitly approved).
    - Forms must validate on blur and on submit.

37. **Thank You Page**:
    - Every form submission (contact, signup, purchase) must redirect to or display a dedicated thank-you/confirmation view.
    - Never leave the user on the same form after a successful submission without clear feedback.

38. **Privacy Policy Page**:
    - Every project must include a `/privacy` or `/privacy-policy` page with real, applicable privacy policy content.
    - Must be linked from the site footer.

39. **Terms and Conditions Page**:
    - Every project must include a `/terms` or `/terms-and-conditions` page.
    - Must be linked from the site footer alongside the privacy policy.

40. **Cookie Banner**:
    - If the site uses cookies or third-party tracking, a cookie consent banner must be displayed on first visit.
    - The banner must allow the user to accept, reject, or customize cookie preferences.

41. **Analytics Installed**:
    - Every production project must have analytics configured (e.g., Google Analytics, Plausible, PostHog).
    - Analytics scripts must respect cookie consent (rule 40) and load conditionally.

42. **Real Contact Address**:
    - The site must display a real, verifiable contact method (email, phone, or physical address) in the footer or contact page.
    - Never use placeholder contact information in production.

43. **Compressed Images**:
    - All images must be served in modern compressed formats (WebP or AVIF preferred).
    - Use the framework's image optimization component (e.g., Next.js `<Image>`) with appropriate `quality`, `width`, and `height` attributes.
    - Never serve uncompressed PNG/JPEG originals directly in production.

44. **Compressed JSON & Logical DB Writes**:
    - All JSON payloads (API responses, stored data) must be minified/compressed — no pretty-printed JSON in production responses.
    - Database writes must be batched and logical — never use single-row inserts in loops, N+1 query patterns, or unbounded writes.
    - Identify and eliminate single-dependency bottlenecks (one service or query blocking an entire page load).

45. **Optimistic Rendering & Non-Static Hosting**:
    - Use optimistic UI updates for all user-initiated mutations (likes, saves, form submissions) — update the UI immediately and reconcile with the server response.
    - The site must be deployed on a non-static host that supports SSR, ISR, or edge rendering (e.g., Vercel, Cloudflare Workers, AWS Lambda). Never deploy a dynamic app as a purely static export.

46. **Mobile Navigation Patterns**:
    - On mobile, implement appropriate navigation patterns: side menu (hamburger drawer), bottom tab bar, floating action button (FAB), bottom sheet, three-dot overflow menu, and grid layouts.
    - These patterns are critical for mobile UX and must be present where contextually appropriate.
    - Use rectangular touch targets (minimum 44×44px) with adequate spacing for finger-friendly interaction.
