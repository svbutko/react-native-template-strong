---
sidebar_position: 4
title: State
---

## Content

State is defined by an interface and a constant with its initial values in a separated file.

E.g. `systemState.ts`:

```typescript
export interface SystemState {
  isOnboardingVisited: boolean;
}

export const SystemInitialState: SystemState = {
  isOnboardingVisited: false,
};
```

