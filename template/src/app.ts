import {Pages, registerComponents, setDefaultOptions, Tabs} from "./navigation";
import {Navigation} from "react-native-navigation";
import {localization} from "./common/localization";
import {setDefaultOrientation} from "./common/helpers";

export function initializeApp() {
    setDefaultOrientation();
    registerComponents();
    setDefaultOptions();
    Navigation.events().registerAppLaunchedListener(async () => {
        Navigation.dismissAllModals();
        setRoot();
    });
}

function setRoot() {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: Pages.tabs.id,
                children: [
                    {
                        stack: {
                            id: Tabs.main.id,
                            children: [
                                {
                                    component: {
                                        id: Pages.main.id,
                                        name: Pages.main.name,
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: localization.pages.main
                                },
                            },
                        },
                    },
                    {
                        stack: {
                            id: Tabs.demo.id,
                            children: [
                                {
                                    component: {
                                        id: Pages.demo.id,
                                        name: Pages.demo.name,
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                  text: localization.pages.demo
                                },
                            },
                        },
                    },
                    {
                        stack: {
                            id: Tabs.more.id,
                            children: [
                                {
                                    component: {
                                        id: Pages.more.id,
                                        name: Pages.more.name,
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: localization.pages.more
                                },
                            },
                        },
                    }
                ],
            },
        }
    });
}
