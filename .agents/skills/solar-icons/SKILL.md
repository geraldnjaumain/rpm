---
name: solar-icons
description: Strict guidelines for icon usage across the project using Solar Icons in duoutline (line-duotone) style only.
---

# Solar Icons Guidelines

## Rules
1. **Solar Icons Only**: Only use Solar icons. Never import Lucide, Heroicons, FontAwesome, or other icon sets.
2. **Duoutline (Line Duotone) Exclusively**: Only the `duoutline` / `line-duotone` variant of Solar icons is permitted. Never use bold, linear, broken, or outline variants.
3. **Import Path**: Import strictly from `@s9-labs/solar-icons/line-duotone` (e.g. `import { HomeIcon } from "@s9-labs/solar-icons/line-duotone"`).
4. **No Sparkle or Flash Icons**: Never use star, sparkle, magic, or flash/lightning icons.
5. **No Icon Background in Cards**: Icons positioned inside cards must never have a background wrapper or pill container; they sit directly on the card surface.
