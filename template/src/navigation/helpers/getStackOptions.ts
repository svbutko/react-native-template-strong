import {Options} from "react-native-navigation/lib/dist/src/interfaces/Options";
import {i18next, TFuncKeyApp} from "~/common/localization/localization";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {Navigation} from "react-native-navigation";
import {useNavigationButtonPress} from "react-native-navigation-hooks";
import {INavigationPage} from "~/types";
import {Colors} from "~/core/theme/colors";
import {Fonts} from "~/core/theme/fonts";

function getOptions(i18nKey: TFuncKeyApp, optionMigrator?: (customOptions: Options) => Options) {
  const options: Options = {
    topBar: {
      title: {
        text: i18next.t(i18nKey) as string,
        fontFamily: Fonts.brand,
        fontSize: 17,
        fontWeight: "700",
        color: Colors.primaryBlack,
        alignment: "center",
      },
    },
  };

  return optionMigrator ? optionMigrator(options) : options;
}

export const getStackOptions = (i18nKey: TFuncKeyApp, screen: INavigationPage, optionsMigrator?: (customOptions: Options) => Options) => ({
  getOptions: (): Options => {
    return getOptions(i18nKey, optionsMigrator);
  },

  useUpdateTitle: (onUpdate?: () => void) => {
    const {t} = useTranslation();

    useEffect(() => {
      onUpdate?.();
      Navigation.mergeOptions(screen.id, getOptions(i18nKey, optionsMigrator));
    }, [t, onUpdate]);
  },

  useInvokeSideMenu: () => {
    useNavigationButtonPress((params) => {
      if (params.buttonId === "leftSideMenuButton") {
        Navigation.mergeOptions(screen.id, {
          sideMenu: {
            left: {
              visible: true,
            },
          },
        });
      } else if (params.buttonId === "rightSideMenuButton") {
        Navigation.mergeOptions(screen.id, {
          sideMenu: {
            right: {
              visible: true,
            },
          },
        });
      }
    }, {componentId: screen.id});
  },
});

export type StackOptionsType = ReturnType<typeof getStackOptions>;
