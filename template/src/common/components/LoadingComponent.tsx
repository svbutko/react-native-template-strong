import {ActivityIndicator, StyleProp, View, ViewStyle} from "react-native";
import React from "react";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Colors} from "~/core/theme/colors";
import {Brand} from "~/infrastructure/typography";

interface IProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const LoadingComponent = ({containerStyle}: IProps) => {
  return (
    <View style={containerStyle || CommonStyles.flexCenter}>
      <ActivityIndicator
        animating={true}
        color={Colors.black}
        size={"small"}
      />
      <Brand.H4 numberOfLines={1} labelKey={"common.loading"}/>
    </View>
  );
};
