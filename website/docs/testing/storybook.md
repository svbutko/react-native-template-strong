---
sidebar_position: 2
title: Storybook
---
## Content

Storybook is a powerful frontend workshop environment tool that allows teams to design, build, and organize UI components (and even full screens!) without getting tripped up over business logic and plumbing.

To learn more about Storybook, check [this page](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/).

All the stories are located in `storybook`.

Each created story file should follow the next template: `testName.stories.tsx`.

## Opening Storybook

To open Storybook in debug mode, shake your device to open dev. menu and at the very bottom you can see Storybook.

The overlay will open where you can see individual stories.

## Adding stories

If it's a component then you can add it to `Components.stories.tsx` by following the same structure defined there.

If you'd like to create a separate stories, then create a file in the `storybook/stories` folder with proper naming.

Create a stories' module (as example I will use `Components`:

```typescript jsx
import {Meta} from '@storybook/react';

const meta = {
    component: ComponentStories,
    title: 'My own component sotry',
} satisfies Meta<typeof ComponentStories>;

export default meta;
```

## Plugins

There two plugins installed at this moment in this template:
- `@storybook/addon-ondevice-actions` - mock `onPress` calls with actions that will log information in the actions tab
- `@storybook/addon-ondevice-knobs` -  adjust your components props in realtime

You can check [this page](https://storybook.js.org/addons/@storybook/addon-ondevice-actions) about plugins usage.
