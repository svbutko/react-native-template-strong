import {i18next} from "~/common/localization/localization";
import {Navigation} from "react-native-navigation";
import {Colors} from "~/core/theme/colors";
import {isAndroid} from "~/core/theme/commonConsts";

export function setDefaultOptions() {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
      },
      setStackRoot: {
        waitForRender: true,
      },
    },
    layout: {
      componentBackgroundColor: Colors.white,
    },
    topBar: {
      animate: true,
      drawBehind: !isAndroid,
      background: {
        translucent: true,
        color: Colors.blue,
      },
      title: {
        color: Colors.black,
      },
      largeTitle: {
        visible: false,
      },
      scrollEdgeAppearance: {
        active: true,
        noBorder: true,
        background: {
          translucent: true,
          color: Colors.gray,
        },
      },
      searchBar: {
        visible: false,
        hideOnScroll: true,
        hideTopBarOnFocus: true,
        obscuresBackgroundDuringPresentation: true,
      },
      hideNavBarOnFocusSearchBar: true,
      searchBarHiddenWhenScrolling: true,
      searchBarPlaceholder: i18next.t("common.search"),
      noBorder: false,
    },
    bottomTabs: {
      animate: true,
      hideShadow: false,
      translucent: true,
      animateTabSelection: true,
      preferLargeIcons: false,
      tabsAttachMode: "together",
      backgroundColor: Colors.blue,
      borderWidth: 1,
      borderColor: Colors.black,
    },
    bottomTab: {
      selectedTextColor: Colors.black,
      selectedIconColor: Colors.black,
      textColor: Colors.black,
      iconColor: Colors.black,
    },
    statusBar: {
      backgroundColor: Colors.blue,
      visible: true,
    },
  });
}
