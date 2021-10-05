---
sidebar_position: 1
title: Component styles
---
## Content

Component styles are stored withing its own file at the very bottom of it

The conventional method of creating styles for components is by using [StyleSheet.create](https://reactnative.dev/docs/stylesheet).

## Creating

```typescript
const styles = StyleSheet.create({
  container: {
    padding: CommonSizes.spacing.medium,
  } as ViewStyle,
  title: {
    fontWeight: "600",
    textAlign: "center",
    marginBottom: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  description: {
    textAlign: "center",
  } as TextStyle,
});
```

Every style has to be assigned to its proper interface (`ViewStyle`, `TextStyle`, `ImageStyle` etc.) to have proper types and validations by TypeScript.

## Merging

To merge styles simply use spread operator like so:

```typescript
const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexCenter,
    padding: CommonSizes.spacing.medium,
  } as ViewStyle,
  title: {
    ...CommonStyles.normalText,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  description: {
    ...CommonStyles.normalText,
    textAlign: "center",
  } as TextStyle,
});
```

## Usage

Use the styles constant and appropriate parameter like so:

```typescript jsx
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
```
