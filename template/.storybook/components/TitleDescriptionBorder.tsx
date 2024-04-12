import React, {FC, Fragment} from 'react';
import {Separator} from '../../src/common/components/Separator';
import {DescriptionText} from './DescriptionText';

interface IProps {
  title: string;
  description: string;
  isLast?: boolean;
}

export const TitleDescriptionBorder: FC<IProps> = ({title, description, isLast}) => {
    return (
      <Fragment>
        <DescriptionText>{title}</DescriptionText>
        <DescriptionText>{description}</DescriptionText>
        {isLast ? null : <Separator />}
      </Fragment>
    );
};
