---
sidebar_position: 11
title: RadioIcon
---

## Content

Simple icon component which will be used in `RadioButton`.

## Params

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| isSelected           | `boolean`         | True           | -              | Changes the rendering icon design based on selection
| disabled        | `boolean`         | False          | Undefined             | If disabled then not allows to select it and shows different design

## Usage example

```typescript jsx
RadioButton.defaultProps = {
  IconComponent: RadioIcon,
};
```
