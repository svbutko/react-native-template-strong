import {Pages} from "../pages";
import {Layout, Navigation} from "react-native-navigation";
import {IToastNavProps} from "../../common/components/ToastOverlay";

export function showToast(props: IToastNavProps) {
  const data: Layout<IToastNavProps> = {
    component: {
      name: Pages.toast.name,
      passProps: props,
    },
  };

  Navigation.showOverlay<IToastNavProps>(data);
}
