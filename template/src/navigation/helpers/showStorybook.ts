import {Pages} from "../pages";
import {localization} from "../../common/localization";
import {Navigation} from "react-native-navigation";

export function showStorybook() {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: Pages.storybook.name,
            id: Pages.storybook.id,
            options: {
              topBar: {
                title: {
                  text: localization.pages.storybook,
                },
              },
            },
          },
        },
      ],
    },
  });
}
