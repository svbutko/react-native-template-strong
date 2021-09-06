import {Pages} from "../pages";
import {Navigation} from "react-native-navigation";
import {localization} from "../../common/localization/localization";

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
