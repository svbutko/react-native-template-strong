import {Pages} from "~/navigation/pages";
import {Navigation} from "react-native-navigation";
import {i18next} from "~/common/localization/localization";

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
                  text: i18next.t("pages.storybook"),
                },
              },
            },
          },
        },
      ],
    },
  });
}
