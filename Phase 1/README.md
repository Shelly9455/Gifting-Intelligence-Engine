# Gifting Intelligence Engine — Expo App (Phase 1)

React Native (Expo) migration of the Emotional Gifting Guide. This folder contains
**Phase 1: Project Setup & Architecture Foundation** from `MIGRATION_PLAN.md`.

## What Phase 1 delivers

- Expo SDK 57 + TypeScript project
- Expo Router with file-based route groups: `(onboarding)` and `(recipient)`
- NativeWind (Tailwind CSS for React Native) styling
- Core deps: `zustand`, `react-native-reanimated`, `react-native-gesture-handler`,
  `react-native-safe-area-context`
- Layered architecture folder skeleton
- Zustand stores: `useGiftStore`, `useRecipientStore`, `useAppStore`
- Centralized TypeScript types in `src/types`
- Design tokens (`src/constants`), theme (`src/theme`), utilities (`src/utils`)

> Business logic, service layer, hooks, UI components, and screen migration land in
> later phases (see `MIGRATION_PLAN.md`).

## Structure

```
app/                     # Expo Router routes
  _layout.tsx            # Root layout (GestureHandler + SafeArea + Stack)
  index.tsx              # Landing (placeholder)
  (onboarding)/          # Onboarding flow group
  (recipient)/           # Recipient flow group
src/
  components/ui/         # Base UI components (Phase 5)
  hooks/                 # Custom hooks (Phase 4)
  services/              # Service layer (Phase 3)
  engine/                # Pure business logic (Phase 2)
  data/                  # Catalogs / static data (Phase 2)
  store/                 # Zustand global state
  types/                 # Shared TypeScript interfaces
  constants/             # Colors, typography, spacing, routes, analytics
  theme/                 # Theme configuration
  utils/                 # cn(), validation, formatting
  global.css             # Tailwind directives (NativeWind input)
```

## Getting started

```bash
npm install
npm run start        # Expo dev server
npm run web          # Run in browser
npm run android      # Run on Android emulator/device
npm run ios          # Run on iOS simulator (macOS)
```

## Quality checks

```bash
npx tsc --noEmit     # Type check
npm run lint         # ESLint (eslint-config-expo)
npx expo-doctor      # Project health
```

Path alias `@/*` maps to `src/*`.
