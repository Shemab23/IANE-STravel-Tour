# ⚡ Shema React Starter (`shema-react-starter`)

> **Battle-tested React 19 + TypeScript + Vite boilerplate designed for zero-friction project initializations.**

Created by **Bruno SHEMA**, Finalist in Software Engineering.
Operating under **Shema Solution** — *Building reliable, scalable, and modern digital products.*

---

## 📌 Why This Starter Exists

Starting a front-end project from scratch can be frustrating. Modern web development moves quickly: documentation changes overnight, breaking updates creep into sub-dependencies, setup steps break, and hours are spent wiring up identical tooling for every new application.

`shema-react-starter` solves this setup fatigue. It packages a pre-configured, battle-tested modern frontend stack into a reliable template. Every tool, linter, router, and state manager is wired up to work seamlessly together out of the box.

---

## 🚀 Quick Start

### 1. Clone & Re-initialize Git

To detach this template from the starter repository and create your own clean git history:

```bash
# Remove starter git history and initialize your project
rm -rf .git
git init

```

### 2. Verify `.gitignore` Setup

Ensure your local root `.gitignore` file includes these standard exclusions:

```text
node_modules
dist
.env
.env.local
.DS_Store
coverage

```

### 3. Install & Run

```bash
# Install exact dependency tree
npm install

# Start local dev server
npm run dev

```

---

## 📁 Asset Management Standard

Keep static resources inside `src/assets/` (images, fonts, icons) and leverage the standard `@/` alias for clean imports across components:

```tsx
// Preferred import pattern using the path alias
import logo from "@/assets/logo.svg";

export function BrandLogo() {
  return <img src={logo} alt="Brand Logo" className="h-8 w-auto" />;
}

```

---

## 🧰 Tech Stack Breakdown

| Layer | Library / Tool | Version | Purpose |
| --- | --- | --- | --- |
| **Runtime & Build** | `React` + `Vite` | `19.x` / `8.x` | Fast JSX rendering and low-latency HMR dev server |
| **Type Safety** | `TypeScript` | `6.x` | Type checking across components, hooks, and stores |
| **Routing** | `React Router` | `7.x` | Declarative routing with layout support (`<Outlet />`) |
| **Server State** | `TanStack Query` | `5.x` | Asynchronous data fetching, caching, and invalidation |
| **Client State** | `Zustand` | `5.x` | Lightweight global store management |
| **Styling** | `Tailwind CSS` | `4.x` | Engine powered by `@tailwindcss/vite` |
| **UI Primitive** | `Base UI` + `Shadcn` | `1.x` / `4.x` | Unstyled accessible primitives and UI presets |
| **Motion** | `Framer Motion` | `13.x` | Layout animations, transitions, and micro-interactions |
| **Toasts** | `Sonner` | `2.x` | Minimalist toast notifications |

---

## ⚠️ Fragile Dependency & Breaking Change Watchlist

Modern front-end ecosystems evolve rapidly. The following dependencies carry the highest risk of breaking your build during major updates. Use this table as your first reference point whenever an update fails.

| Dependency | Current Version | Fragility Risk | Potential Breaking Point / Action Plan |
| --- | --- | --- | --- |
| `@tailwindcss/vite` & `tailwindcss` | `^4.3.3` | **High** | Tailwind v4 uses CSS-first configuration (`@theme`). Upgrades may break existing `tailwind.config.js` setups or dynamic utility classes. |
| `react` & `react-dom` | `^19.2.8` | **High** | React 19 changes ref handling (`ref` as a prop) and strict context patterns. Peer dependencies in third-party UI libraries often lag behind. |
| `react-router-dom` | `^7.18.2` | **Medium** | React Router v7 unifies Remix and React Router paradigms. Upgrades frequently modify data loader APIs and type signatures. |
| `@tanstack/react-query` | `^5.102.3` | **Medium** | Major version increments often modify options syntax inside `useQuery` / `useMutation` hooks. |
| `typescript` | `~6.0.2` | **Medium** | Major version bumps enforce stricter type narrowing that may cause previously valid TS code to fail type checking during `npm run build`. |
| `framer-motion` | `^13.1.1` | **Low-Medium** | Component animation props (e.g., `AnimatePresence`, layout IDs) can shift between major versions. |

---

## 🛠️ Code Quality & Verification Scripts

```bash
# Run local development environment
npm run dev

# Execute type check and Vite bundle production build
npm run build

# Run ESLint verification across codebase
npm run lint

# Preview local production build output
npm run preview

```

---

## 🛡️ License & Organization

Developed and maintained by **Bruno SHEMA** under **Shema Solution**.

All rights reserved © 2026.
