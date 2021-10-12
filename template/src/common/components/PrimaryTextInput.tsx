import React, {FC, memo, MutableRefObject, Ref, useCallback, useMemo, useState} from "react";
import {Platform, StyleSheet, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {ITextInputMask} from "../../types";
import {TextInputMask} from "react-native-masked-text";
import {Colors, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme/colors";
import {isIos} from "../../core/theme/commonConsts";
import {CommonSizes} from "../../core/theme/commonSizes";
import {CommonStyles} from "../../core/theme/commonStyles";
import {platformMixedColor, platformNativeColor} from "../helpers/colorHelpers";

interface IProps extends TextInputProps {
  nextInputFocusRef?: MutableRefObject<any>;
  inputRef?: Ref<any>;
  containerStyle?: ViewStyle;
  label?: string;
  error?: string | null;
  hint?: string;
  mask?: ITextInputMask;
  autoComplete?:
    | "off"
    | "username"
    | "password"
    | "email"
    | "name"
    | "tel"
    | "street-address"
    | "postal-code"
    | "cc-number"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year";
}

export const PrimaryTextInput: FC<IProps> = memo(
  ({label, error, hint, containerStyle, mask, inputRef, nextInputFocusRef, onTouchStart, onFocus, onBlur, onSubmitEditing, ...props}) => {
    const [isFocused, setFocused] = useState<boolean>(false);

    const onLocalFocus = useCallback(
      (e) => {
        setFocused(true);
        onFocus && onFocus(e);
      },
      [onFocus, setFocused],
    );

    const onLocalBlur = useCallback(
      (e) => {
        setFocused(false);
        onBlur && onBlur(e);
      },
      [onBlur, setFocused],
    );

    const inputContainerStyle = useMemo(() => {
      return getInputContainerStyle(isFocused, error, onTouchStart ? true : props.editable);
    }, [isFocused, error, props.editable, onTouchStart]);

    const onLocalSubmitEditing = useCallback(
      (e) => {
        onSubmitEditing && onSubmitEditing(e);
        nextInputFocusRef && nextInputFocusRef.current && nextInputFocusRef.current.focus();
      },
      [nextInputFocusRef, onSubmitEditing],
    );

    const pointerEvents = useMemo(() => {
      return onTouchStart ? "none" : undefined;
    }, [onTouchStart]);

    return (
      <View style={[styles.container, containerStyle]}>
        <Label text={label} />
        <TouchableOpacity style={inputContainerStyle} onPress={onTouchStart} disabled={!onTouchStart}>
          {mask != null ? (
            <TextInputMask
              type={mask.type}
              options={mask.options}
              includeRawValueInChangeText={true}
              selectionColor={platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary)}
              disableFullscreenUI={true}
              {...props}
              pointerEvents={pointerEvents}
              refInput={inputRef}
              style={[styles.input, props.style]}
              onFocus={onLocalFocus}
              onBlur={onLocalBlur}
              onSubmitEditing={onLocalSubmitEditing}
            />
          ) : (
            <TextInput
              disableFullscreenUI={true}
              selectionColor={platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary)}
              {...props}
              pointerEvents={pointerEvents}
              ref={inputRef}
              style={[styles.input, props.style]}
              onFocus={onLocalFocus}
              onBlur={onLocalBlur}
              onSubmitEditing={onLocalSubmitEditing}
            />
          )}
        </TouchableOpacity>
        <BottomText error={error} hint={hint} />
      </View>
    );
  },
);

const Label: FC<{text?: string}> = memo(({text}) => {
  if (text != null) {
    return (
      <Text style={styles.label} numberOfLines={1}>
        {text}
      </Text>
    );
  } else {
    return null;
  }
});

const BottomText: FC<{error?: string | null; hint?: string}> = memo(({error, hint}) => {
  if (error != null) {
    return <Text style={styles.error}>{error}</Text>;
  } else if (hint != null) {
    return <Text style={styles.hint}>{hint}</Text>;
  } else {
    return null;
  }
});

function getInputContainerStyle(isFocused: boolean, error?: string | null, editable?: boolean): ViewStyle {
  if (isIos) {
    return !editable ? styles.disabledInputContainer : styles.inputContainer;
  } else {
    if (isFocused) {
      return styles.focusedInputContainer;
    } else if (!editable) {
      return styles.disabledInputContainer;
    } else if (error) {
      return styles.errorInputContainer;
    } else {
      return styles.inputContainer;
    }
  }
}

const commonInputContainer: TextStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: CommonSizes.spacing.extraLarge,
  textAlignVertical: "center",
  textAlign: "center",
  ...Platform.select({
    ios: {
      borderRadius: CommonSizes.borderRadius.medium,
      backgroundColor: platformNativeColor(PlatformColorsIOS.systemFill),
    } as TextStyle,
    android: {
      borderRadius: CommonSizes.borderRadius.extraSmall,
      borderColor: Colors.gray,
      borderWidth: 1,
    } as TextStyle,
  }),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  } as ViewStyle,
  input: {
    ...CommonStyles.normalText,
    flex: 1,
    textAlignVertical: "center",
    paddingLeft: CommonSizes.spacing.medium,
    ...Platform.select({
      android: {
        paddingRight: CommonSizes.spacing.medium,
      },
    }),
  } as TextStyle,
  inputContainer: {
    ...commonInputContainer,
    ...Platform.select({
      ios: {
        paddingRight: CommonSizes.spacing.medium,
      },
    }),
  } as TextStyle,
  errorInputContainer: {
    ...commonInputContainer,
    ...Platform.select({
      android: {
        borderColor: Colors.red,
      },
    }),
  } as TextStyle,
  disabledInputContainer: {
    ...commonInputContainer,
    ...Platform.select({
      android: {
        backgroundColor: Colors.gray,
        borderColor: Colors.gray,
      },
    }),
  } as TextStyle,
  focusedInputContainer: {
    ...commonInputContainer,
    ...Platform.select({
      android: {
        borderColor: Colors.darkGray,
      },
    }),
  } as TextStyle,
  label: {
    ...CommonStyles.normalText,
    paddingBottom: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  hint: {
    ...CommonStyles.normalText,
    fontWeight: "200",
    fontSize: CommonSizes.font.small,
    lineHeight: CommonSizes.lineHeight.small,
    paddingTop: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  error: {
    ...CommonStyles.normalText,
    color: platformMixedColor(PlatformColorsIOS.systemRed, Colors.red),
    fontSize: CommonSizes.font.small,
    lineHeight: CommonSizes.lineHeight.small,
    paddingTop: CommonSizes.spacing.extraSmall,
  } as TextStyle,
});

PrimaryTextInput.defaultProps = {
  style: styles.input,
  blurOnSubmit: true,
  disableFullscreenUI: true,
  enablesReturnKeyAutomatically: true,
  underlineColorAndroid: Colors.transparent,
  placeholderTextColor: platformNativeColor(PlatformColorsIOS.placeholderText, PlatformColorsAndroid.secondaryText),
  editable: true,
  clearButtonMode: "while-editing",
};
