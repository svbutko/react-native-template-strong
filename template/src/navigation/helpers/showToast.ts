import {Pages} from "../pages";
import {localization} from "../../common/localization";
import {Layout, Navigation} from "react-native-navigation";
import {IToastNavProps} from "../../common/components/Toast";

export function showToast(props: IToastNavProps) {
  const data: Layout<IToastNavProps> = {
    component: {
      name: Pages.toast.name,
      id: Pages.toast.id,
      passProps: props,
      options: {
        topBar: {
          title: {
            text: localization.pages.selectDate,
          },
        },
      },
    },
  };

  Navigation.showOverlay<IToastNavProps>(data);
}
