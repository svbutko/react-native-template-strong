---
sidebar_position: 1
title: Colors
---

All your colors are stored in `/src/core/theme/colors.ts` as a simple enum:

```typescript jsx
export enum Colors {
  black = "#000000",
  white = "#FFFFFF",
  gray = "#F1F1F1",
  darkGray = "#262626",
  blue = "#0A60FF",
  green = "#4DAD4A",
  red = "#CE3C3E",
  transparent = "transparent",
}
```

You can add here simple colors shared by both platforms and which will look the same in `dark` and `light` themes of your application.

You can use this colors next way:

```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
  } as ViewStyle,
});
```
You probably noticed that there are two more enums in `colors.ts`, these are native colors, they work with `dark` and `light` themes.

Follow to the next page to see how to use and add them.
