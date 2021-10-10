---
sidebar_position: 10
title: InputMask
---

## Content

Preset of input masks for `PrimaryTextInput`'s `mask` property of [react-native-masked-text](https://github.com/benhurott/react-native-masked-text).

### phone
Creates a mask with following format `"+99 999 999 99999"` with `maxLength` equal to 18

### numbersOnly
Creates a mask to accept only numbers

#### Usage example

```typescript jsx
<PrimaryTextInput label={"Enter numbers"} mask={InputMask.numbersOnly}/>
