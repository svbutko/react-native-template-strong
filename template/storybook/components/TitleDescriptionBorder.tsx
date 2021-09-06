import React, {FC, Fragment, memo} from "react";
import {Separator} from "../../src/common/components/Separator";
import {DescriptionText} from "./DescriptionText";

interface IProps {
  title: string;
  description: string;
  isLast?: boolean;
}

export const TitleDescriptionBorder: FC<IProps> = memo(({title, description, isLast}) => {
  return (
    <Fragment>
      <DescriptionText>{title}</DescriptionText>
      <DescriptionText>{description}</DescriptionText>
      {isLast ? null : <Separator />}
    </Fragment>
  );
});
