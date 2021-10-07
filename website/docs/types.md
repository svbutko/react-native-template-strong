---
sidebar_position: 19
title: Types
---
## Own types, interfaces and enums

There are many types, interfaces and enums which are being used in this template, they are all included in [types/index.ts](https://github.com/svbutko/react-native-template-strong/blob/main/template/src/types/index.ts).

If you have some interface, type or enum which you are going to use in different places and it's sort of global then add it in this file.

To briefly describe what each currently existed interface/type/enum does:

- `AppEnvironment` - enum of your environments
- `INavigationPage` - minimal needed description of your navigation pages
- `IOnboardingData` - interface of each of the carousel/case item from `Onboarding`
- `LoadState` - important enum which is responsible to setting current state of your lists stored in redux, and visual representation of items based on it
- `TouchablePlatformProps` - copy of `PressableProps` with slight changes of `style`
- `ButtonType` - enum of [PrimaryButton](../docs/components/primary-button.md) type representation;
- `ISize` - enum of possible sizes for your style constants [commonSizes](https://github.com/svbutko/react-native-template-strong/blob/main/template/src/core/theme/commonSizes.ts)
- `IListState` - simple interface to store necessary list data, mostly used with [FlatListWrapper](../docs/components/flat-list-wrapper.md)
- `ISection` - same as `IListState` but for [SectionListWrapper](../docs/components/section-list-wrapper.md)
- `RehydrateAppAction` - interface for rehydrated params (our redux root state) which comes when `rehydrate` occurs
- `ErrorRepresentationType` - enum of possible errors which will be shown to user when using API requests or text input validations
- `IErrorResult` - result of error representation
- `ITextInputMask` - interface which is used for creation of input masks


## Dependency types

If you'd like to change or add types for dependencies from `node_modules` 
then you can check the already existing [react-native-config.d.ts](https://github.com/svbutko/react-native-template-strong/blob/main/template/src/types/react-native-config.d.ts)
type and create your own by following next steps:

- Create a file in [types](https://github.com/svbutko/react-native-template-strong/tree/main/template/src/types) with name of your dependency like so e.g. `react-native-config.d.ts` 
- Declare a module
- Add needed types and interfaces
- Create proper (default or not) exports

TypeScript uses `types` folder to check for additional types so after making your changes they will be seen in action immediately.
