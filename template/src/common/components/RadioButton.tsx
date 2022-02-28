import React, {FC, FunctionComponent, memo, useCallback, useMemo} from "react";
import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {RadioIcon} from "./RadioIcon";
import {TouchablePlatform} from "./TouchablePlatform";
import {CommonSizes} from "~/core/theme/commonSizes";
import {Colors} from "~/core/theme/colors";
import {Brand} from "~/infrastructure/typography";

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

export const RadioButton: FC<IProps> = memo(({isSelected, label, onPress, disabled, IconComponent, id}) => {
  const onButtonPress = useCallback(() => {
    onPress(id, !isSelected);
  }, [onPress, isSelected, id]);

  const labelStyle = useMemo(() => {
    return disabled ? styles.labelDisabled : styles.label;
  }, [disabled]);

  return (
    <TouchablePlatform style={styles.container} onPress={onButtonPress} disabled={disabled}>
      {IconComponent && <IconComponent disabled={disabled} isSelected={isSelected}/>}
      <Brand.H4 style={labelStyle} numberOfLines={1}>
        {label}
      </Brand.H4>
    </TouchablePlatform>
  );
});

RadioButton.defaultProps = {
  IconComponent: RadioIcon,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: CommonSizes.spacing.medium,
    alignItems: "center",
  } as ViewStyle,
  label: {
    flex: 1,
    paddingLeft: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  labelDisabled: {
    flex: 1,
    paddingLeft: CommonSizes.spacing.extraSmall,
    color: Colors.gray,
  } as TextStyle,
});
