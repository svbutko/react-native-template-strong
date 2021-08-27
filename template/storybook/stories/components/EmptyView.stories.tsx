import React, {FC} from "react";
import {ScrollView} from "react-native";
import {CommonStyles} from "../../../src/core/theme";
import {EmptyView} from "../../../src/common/components";

export const EmptyViewStories: FC = () => {
  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <EmptyView title={"You have no items yet"} description={"All your items will be displayed here"} />
    </ScrollView>
  );
};
