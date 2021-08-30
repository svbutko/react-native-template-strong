import {Navigation, NavigationConstants} from "react-native-navigation";
import {useState} from "react";

export function useNavigationConstants() {
  const [constants, setConstants] = useState<NavigationConstants>();

  Navigation.constants().then(setConstants);

  return constants;
}
