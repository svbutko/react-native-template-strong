---
sidebar_position: 7
title: stringHelpers
---
## Content

Set of string helpers

### capitalizeFirstLetter

Capitalizes first letter of provided string. Returns a new string.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| word           | `string`         | True           | -              | String which first letter will be capitalized

#### Usage example

```typescript jsx
capitalizeFirstLetter("test");
```

### removeHtmlTags

Removes HTML tags from provided string. Returns a new string.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| text           | `string`         | True           | -              | String which contains HTML tags

#### Usage example

```typescript jsx
removeHtmlTags("<b>some text</b>");
```

### removeEmojis

Removes emojis from provided string. Returns a new string.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| text           | `string`         | True           | -              | String which contains emojis

#### Usage example

```typescript jsx
removeEmojis("Test😄");
```
