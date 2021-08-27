import React, {FC, memo, MutableRefObject, Ref, useCallback, useMemo, useState} from "react";
import {
  ImageURISource,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import {Colors, CommonStyles, Fonts} from "../../core/theme";
import {ITextInputMask} from "../../types";
import {TextInputMask} from "react-native-masked-text";

interface IProps extends TextInputProps {
  nextInputFocusRef?: MutableRefObject<any>;
  inputRef?: Ref<any>;
  containerStyle?: ViewStyle;
  label?: string;
  iconRight?: ImageURISource;
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
  ({
    label,
    iconRight,
    error,
    hint,
    containerStyle,
    mask,
    inputRef,
    nextInputFocusRef,
    onTouchStart,
    onFocus,
    onBlur,
    onSubmitEditing,
    ...props
  }) => {
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
              selectionColor={Colors.red}
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
              selectionColor={Colors.red}
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
    return (
      <Text style={styles.label} numberOfLines={1}>
        {hint}
      </Text>
    );
  } else {
    return null;
  }
});

function getInputContainerStyle(isFocused: boolean, error?: string | null, editable?: boolean): ViewStyle {
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

const commonInputContainer: ViewStyle = {
  flexDirection: "row",
  borderRadius: 2,
  paddingHorizontal: 12,
  alignItems: "center",
  justifyContent: "center",
  ...Platform.select({
    android: {
      height: 40,
      textAlignVertical: "center",
    },
    ios: {
      paddingVertical: 10.35, //Fixes incorrect iOS vertical font alignment (textVerticalAlignment doesn't work on iOS)
    },
  }),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  } as ViewStyle,
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.system,
    fontWeight: "500",
    fontStyle: "normal",
    color: Colors.black,
    textAlignVertical: "center",
    backgroundColor: Colors.transparent,
  } as TextStyle,
  inputContainer: StyleSheet.flatten([commonInputContainer, {backgroundColor: Colors.gray}]) as ViewStyle,
  errorInputContainer: StyleSheet.flatten([commonInputContainer, {backgroundColor: Colors.red}]) as TextStyle,
  disabledInputContainer: StyleSheet.flatten([
    commonInputContainer,
    {
      backgroundColor: Colors.gray,
    },
  ]) as TextStyle,
  focusedInputContainer: StyleSheet.flatten([
    commonInputContainer,
    {
      backgroundColor: Colors.red,
      ...Platform.select({
        ios: {
          shadowOffset: {height: 0, width: 0},
          shadowOpacity: 0.5,
          shadowRadius: 4,
          shadowColor: Colors.black,
        },
        android: {
          elevation: 2,
        },
      }),
    },
  ]) as TextStyle,
  label: StyleSheet.flatten([CommonStyles.normalText, {color: Colors.gray}]) as TextStyle,
  error: StyleSheet.flatten([CommonStyles.normalText, {color: Colors.red}]) as TextStyle,
});

PrimaryTextInput.defaultProps = {
  style: styles.input,
  blurOnSubmit: true,
  disableFullscreenUI: true,
  enablesReturnKeyAutomatically: true,
  underlineColorAndroid: Colors.transparent,
  placeholderTextColor: Colors.black,
  editable: true,
};
