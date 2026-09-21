```md
# Iane's Travel & Tours

> Conquer the world with us.

A travel website I built as a solo project. Custom Tailwind CSS v4 theme derived from the brand logo — sky blue, sunrise yellow, and army green — with balanced light and dark mode.

---

## Stack

- React + Vite
- Tailwind CSS v4
- shadcn/ui
- Inter Variable

---

## Design System

Three raw colors drive everything:

| Token         | Role                        | Light     | Dark      |
| ------------- | --------------------------- | --------- | --------- |
| `--raw-brand` | Links, buttons, focus       | `#2b7bb9` | `#7fb8e0` |
| `--raw-sun`   | Warm accent, highlights     | `#f5a623` | `#f7c948` |
| `--raw-army`  | Headings, grounding surfaces| `#2f4a2f` | `#a8c4a0` |

All surfaces, borders, and the background gradient are computed from these three with `color-mix()`, so the whole UI re-themes from one palette. Dark mode needs no duplicated values.

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Customization

Change a brand color in one place:

```css
:root { --raw-brand: #2b7bb9; }
.dark { --raw-brand: #7fb8e0; }
```

Everything downstream updates automatically.

Gradient intensity is controlled by the mix percentages in `--bg-gradient` — currently `14%` brand / `12%` army. Bump to `22%` / `20%` for a stronger wash.

---

## License

MIT
```

Short, honest, and still covers what matters: what it is, what it's built with, how the color system works, and how to run it. Cut anything you don't need — if it's just a personal repo, you can even drop the License section.
