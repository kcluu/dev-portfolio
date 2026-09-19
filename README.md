# Katelyn Luu — Portfolio

A one-page portfolio built as a little browser window: vertical tabs for
About / Work / Contact, a draggable chrome bar, and a light/dark toggle
that only affects the window itself, not the page behind it.

## Stack

- React 18 + TypeScript
- Vite
- Plain CSS (one stylesheet per component, no CSS framework)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Project structure

```
src/
  components/        one folder per component, each with its own .tsx + .css
  data/              career history + project content, as typed data
  hooks/             useTheme (dark mode) and useDraggable (window dragging)
  styles/            shared design tokens + panel styles
```

## Customizing

All of the actual content — name, bio, career history, project details,
contact links — lives in:

- `src/components/AboutPanel/AboutPanel.tsx`
- `src/data/career.ts`
- `src/data/projects.ts`
- `src/components/ContactPanel/ContactPanel.tsx`

Swap in the real details there and everything else (layout, theming,
responsiveness) should keep working as-is.
