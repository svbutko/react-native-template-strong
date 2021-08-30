import {Pages} from "../pages";
import {Layout, Navigation} from "react-native-navigation";
import {IToastNavProps} from "../../common/components/Toast";

export function showToast(props: IToastNavProps) {
  const data: Layout<IToastNavProps> = {
    component: {
      name: Pages.toast.name,
      id: Pages.toast.id,
      passProps: props,
    },
  };

  Navigation.showOverlay<IToastNavProps>(data);
}
