import {CommonSizes} from "~/core/theme/commonSizes";
import {Colors} from "~/core/theme/colors";
import {ImageStyle, TextStyle, ViewStyle} from "react-native";
import {typographyStyles} from "~/startup/configureTypography";

const commonButtonStyle: ViewStyle = {
  padding: CommonSizes.spacing.extraSmallPlus,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: CommonSizes.borderRadius.small,
  flexDirection: "row",
  backgroundColor: Colors.transparent,
};

const commonLabelStyle: TextStyle = {
  ...typographyStyles.Brand.H5,
  fontWeight: "700",
  color: Colors.black,
  textAlign: "center",
  textAlignVertical: "center",
};

const commonIcon: ImageStyle = {
  width: 22,
  height: 22,
  marginHorizontal: CommonSizes.spacing.extraSmall,
  resizeMode: "contain",
  tintColor: Colors.gray,
};

export {commonButtonStyle, commonIcon, commonLabelStyle};
