# UI — shadcn/ui

All UI elements in this project must use **shadcn/ui** components. Do not create custom components.

## Rules

1. **shadcn/ui only.** Never build custom UI components (buttons, inputs, dialogs, badges, etc.). Always use the shadcn/ui equivalent unless there is no alternative.
2. **Add components via CLI.** Install new shadcn/ui components with `npx shadcn@latest add <component>` — do not hand-write component files.
3. **Do not modify shadcn/ui source files** in `components/ui/`. Customise appearance through Tailwind classes at the call site or via CSS variables in `globals.css`.
4. **Use `cn()` for conditional classes.** Always merge class names with the `cn()` utility from `@/lib/utils`.
5. **Icons use lucide-react.** Pass lucide icons as children or props where shadcn/ui components accept them (e.g. `<Button><Plus /> Add</Button>`).

## Available Components

Check `components/ui/` for already-installed components before adding new ones.

## Example

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

<Button variant="default">
  <Plus /> Create Link
</Button>

<Input placeholder="https://example.com" />
```
