---
sidebar_position: 7
title: Hooks
---

## Content

Some hooks which are present in `react-redux` have been modified to utilize local store configuration.

These are the changes that were made:

`useDispatch` becomes `useAppDispatch`:
```typescript
export const useAppDispatch = () => useDispatch<AppDispatch>();
```

`useSelector` becomes `useAppSelector`:
```typescript
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

