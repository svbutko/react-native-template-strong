---
sidebar_position: 1
title: Project
---

## Content

Here you will see a brief description of each folder, to learn more about what a specific folder does continue reading documentation.

- mocks - module mocks for tests
- tests - jest tests
- e2e - detox tests
- patches - patches made with [patch-package](https://github.com/ds300/patch-package)
- resources
  - images - images and icons
  - fonts - fonts `.ttf` files
  - symbols - SF symbols which can be used on iOS
- src
  - common
    - components - common components (e.g. `PrimaryButton.tsx`)
    - helpers - different common helpers (e.g. `platformNativeColor`)
    - hooks - different common hooks (e.g. `useDebounce`)
    - localization - project localization
    - urls - URL openers/handlers
    - utils - different utilities (e.g. `newState`)
    - validations - validations, max and min length constants (e.g. `phoneValidations`)
  - core
    - api - API related requests, DTOs
    - store - `redux` store, `rootReducer`, `systemSlice`
    - theme - colors, common styles, sizes, font constants 
  - modules
  - navigation - pages, roots, tabs, default navigation options
    - helpers - navigation actions, different overlay and modals helpers (e.g. `showDatePicker`)
  - types - common types and types of dependencies which are not present
- storybook - contains storybook stories
