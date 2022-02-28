import React, {FC} from "react";
import {ILabelProps, Label} from "./Label";
import {LabelSizes, LabelTypes, LabelWeights} from "../types";

type StyledLabelsProps = Omit<ILabelProps, keyof {size: LabelSizes; type: LabelTypes; weight: LabelWeights}>;

type ComponentsWeight = FC<StyledLabelsProps> & {
  [PWeight in LabelWeights]: FC<StyledLabelsProps>;
};

type ComponentsSize = {
  [PSize in LabelSizes]: ComponentsWeight;
};

type ComponentsType = {
  [PType in LabelTypes]: ComponentsSize
};

function getStyledComponents(): ComponentsType {
  const types = Object.keys(LabelTypes);
  const sizes = Object.keys(LabelSizes);
  const weights = Object.keys(LabelWeights);

  const components: any = {};
  types.map(type => {
    const sizeSeparation: any = {};
    sizes.map((size) => {
      sizeSeparation[size] = (props: StyledLabelsProps) => React.createElement(Label, {
        ...props,
        type: type as LabelTypes,
        size: size as LabelSizes,
      });

      weights.map((weight) => {
        sizeSeparation[size][weight] = (props: StyledLabelsProps) => React.createElement(Label, {
          ...props,
          type: type as LabelTypes,
          size: size as LabelSizes,
          weight: weight as LabelWeights,
        });
      });
    });
    components[type] = sizeSeparation;
  });

  return components;
}

export const styledLabels = getStyledComponents();
