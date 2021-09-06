import React, {FC, memo} from "react";
import {Fonts} from "../../src/core/theme/fonts";
import {DescriptionText} from "./DescriptionText";

interface IProps {
  font: string;
}

export const FontListItem: FC<IProps> = memo(({font}) => {
  return <DescriptionText style={{fontFamily: (Fonts as any)[font]}}>{font}</DescriptionText>;
});
