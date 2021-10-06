---
sidebar_position: 6
title: Hooks
---

## Content

React Native Navigation offers its own event handling using but for convenience it's advisable to use [React Native Navigation Hooks](https://underscopeio.github.io/react-native-navigation-hooks/docs/before-you-start).

It's already installed in this template.

Check it out how it works and what it offers.

:::tip Tip
When using navigation hooks don't use `NavigationProvider` and `withNavigationProvider`, better supply it with `componentId`:
```typescript jsx
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'

const ExampleScreen = ({ componentId }) => {
  useNavigationComponentDidAppear(
    (e) => {
      console.warn(`${e.componentName} appeared`)
    },
    { componentId }
  )

  return <Text>Example Screen</Text>
}
```
:::
