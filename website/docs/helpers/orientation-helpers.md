---
sidebar_position: 6
title: orientationHelpers
---

## Content

Sets and gets orientation of device. Made possible by [react-native-orientation-locker](https://github.com/wonday/react-native-orientation-locker)
and [react-native-device-detection](https://github.com/m0ngr31/react-native-device-detection).

### getCurrentOrientation

Gets initial orientation of device. For smartphones (with `forceOnPhone` equals `true`) it will always return `PORTRAIT`

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| forceOnPhone           | `Boolean`         | False           | Undefined              | Returns initial device orientation for smartphones too

#### Usage example

```typescript jsx
const [orientation, setOrientation] = useState<OrientationType>(() => getCurrentOrientation());

useOrientationChange((changedOrientation) => {
    if (isTablet) {
        setOrientation(changedOrientation);
    }
});
```

### setDefaultOrientation

Locks orientation on smartphones to `PORTRAIT` and unlocks it for other devices.

#### Usage example

```typescript jsx
export function initializeApp() {
    setDefaultOrientation();
}
```
