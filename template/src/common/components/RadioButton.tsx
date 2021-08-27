import React, {FC, FunctionComponent, memo, useCallback} from "react";
import {StyleSheet, Text, TextStyle, ViewStyle} from "react-native";
import {Colors, CommonSizes, CommonStyles} from "../../core/theme";
import {RadioIcon} from "./RadioIcon";
import {TouchablePlatform} from "./TouchablePlatform";

interface IIconComponentProps {
  isSelected: boolean;
  disabled?: boolean;
}

interface IProps extends IIconComponentProps {
  id: string;
  label: string;
  onPress: (id: string, nextValue: boolean) => void;
  IconComponent?: FunctionComponent<IIconComponentProps>;
}

//TODO: Add CheckBoxIcon example to Storybook
export const RadioButton: FC<IProps> = memo(({isSelected, label, onPress, disabled, IconComponent, id}) => {
  const onButtonPress = useCallback(() => {
    onPress(id, !isSelected);
  }, [onPress, isSelected, id]);

  return (
    <TouchablePlatform style={styles.container} onPress={onButtonPress} disabled={disabled}>
      {IconComponent && <IconComponent disabled={disabled} isSelected={isSelected} />}
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </TouchablePlatform>
  );
});

RadioButton.defaultProps = {
  IconComponent: RadioIcon,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  } as ViewStyle,
  label: {
    ...CommonStyles.normalText,
    flex: 1,
    fontWeight: "500",
    color: Colors.black,
    paddingLeft: CommonSizes.spacing.extraSmall,
  } as TextStyle,
});
