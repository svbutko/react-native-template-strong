import {ITextInputMask} from "../../types";
import {validationConstants} from "../validations/validationConstants";

export class InputMask {
  static readonly phone: ITextInputMask = {
    type: "custom",
    options: {
      mask: "+99 999 999 99999",
      getRawValue: function (value: string): any {
        const result = value.replace(/\D+/g, "");

        return "+" + result;
      },
    },
    maxLength: validationConstants.phone.maxLength,
  };
  static readonly numbersOnly: ITextInputMask = {
    type: "only-numbers",
  };
}
