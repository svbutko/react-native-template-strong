---
sidebar_position: 1
title: Colors
---
## Content

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

1) In styles:

```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
  } as ViewStyle,
});
```

2) In navigation:

```typescript
    topBar: {
      background: {
        color: Colors.black,
      },
      title: {
        color: Colors.white,
      },
    }
```

You can also assign different colors depending on platform using [platformLocalColor](../helpers/color-helpers.md):

```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: platformLocalColor(Colors.black, Colors.red),
  } as ViewStyle,
});
```

In navigation, you can also set this colors to `dark` and `light` themes:

```typescript
    topBar: {
      background: {
        color: {
          light: Colors.white,
          dark: Colors.black,
        },
      },
      title: {
        color: {
          light: Colors.black,
          dark: Colors.white,
        },
      },
    }
```

But it's not preferred, continue reading next to understand why

You probably noticed that there are two more enums in `colors.ts`, these are native colors, they work with `dark` and `light` themes.

Follow to the next page to see how to use and add them.
