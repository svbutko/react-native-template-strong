---
sidebar_position: 3
title: Common sizes
---

## Content

There are many margins, paddings, font sizes, line heights and other parameters that hold some constant number.

`CommonSizes` was created to simplify and unify and fix some misleading or wrong constant numbers.

They are located at `/src/core/theme/commonSizes.ts`.

```typescript
export const CommonSizes = {
  font: {
    extraSmall: 11,
    extraSmallPlus: 12,
    small: 13,
    smallPlus: 15,
    medium: 17,
    mediumPlus: 20,
    large: 22,
    largePlus: 28,
    extraLarge: 34,
    extraLargePlus: 44,
  } as Readonly<ISize>,
  letterSpacing: {
    extraSmall: 0.07,
    extraSmallPlus: 0,
    small: -0.08,
    smallPlus: -0.24,
    medium: -0.41,
    mediumPlus: 0.38,
    large: 0.35,
    largePlus: 0.36,
    extraLarge: 0.37,
    extraLargePlus: 0.37,
  } as Readonly<ISize>,
  lineHeight: {
    extraSmall: 13,
    extraSmallPlus: 16,
    small: 18,
    smallPlus: 20,
    medium: 22,
    mediumPlus: 25,
    large: 28,
    largePlus: 34,
    extraLarge: 41,
    extraLargePlus: 52,
  } as Readonly<ISize>,
  spacing: {
    extraSmall: 8,
    extraSmallPlus: 10,
    small: 12,
    smallPlus: 13,
    medium: 16,
    mediumPlus: 24,
    large: 32,
    largePlus: 40,
    extraLarge: 48,
    extraLargePlus: 56,
  } as Readonly<ISize>,
  borderRadius: {
    extraSmall: 4,
    extraSmallPlus: 6,
    small: 8,
    smallPlus: 10,
    medium: 12,
    mediumPlus: 13,
    large: 14,
    largePlus: 16,
    extraLarge: 18,
    extraLargePlus: 20,
  } as Readonly<ISize>,
};
```

You can use, change, add or remove these constants according to your design.

Try to use them as much as possible.


