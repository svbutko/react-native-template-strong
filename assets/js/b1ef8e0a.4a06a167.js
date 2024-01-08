"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9702],{1297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(5893),a=t(1151);const s={sidebar_position:3,title:"Pages"},o=void 0,r={id:"navigation/pages",title:"Pages",description:"Content",source:"@site/docs/navigation/pages.md",sourceDirName:"navigation",slug:"/navigation/pages",permalink:"/react-native-template-strong/docs/navigation/pages",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/navigation/pages.md",tags:[],version:"current",lastUpdatedAt:1688639826,formattedLastUpdatedAt:"Jul 6, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Pages"},sidebar:"tutorialSidebar",previous:{title:"Default options",permalink:"/react-native-template-strong/docs/navigation/default-options"},next:{title:"Roots",permalink:"/react-native-template-strong/docs/navigation/roots"}},c={},d=[{value:"Content",id:"content",level:2},{value:"Adding pages",id:"adding-pages",level:2},{value:"Registering pages",id:"registering-pages",level:2},{value:"Using pages",id:"using-pages",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"content",children:"Content"}),"\n",(0,i.jsxs)(n.p,{children:["Pages constants are located in ",(0,i.jsx)(n.code,{children:"src/navigation/pages.ts"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'export const Pages = {\n  storybook: {\n    id: "STORYBOOK",\n    name: "Storybook",\n  },\n  splash: {\n    id: "SPLASH_SCREEN",\n    name: "SplashScreen",\n  },\n  onboarding: {\n    id: "ONBOARDING_SCREEN",\n    name: "OnboardingScreen",\n  },\n  toast: {\n    id: "TOAST",\n    name: "ToastOverlay",\n  },\n  datePicker: {\n    id: "DATE_PICKER",\n    name: "DatePickerOverlay",\n  },\n  tabs: {\n    id: "BOTTOM_TABS",\n    name: "BottomTabs",\n  },\n  main: {\n    id: "MAIN_SCREEN",\n    name: "MainScreen",\n  },\n  search: {\n    id: "SEARCH_SCREEN",\n    name: "SearchScreen",\n  },\n  settings: {\n    id: "SETTINGS_SCREEN",\n    name: "SettingsScreen",\n  },\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Pages are defined as the object which contains page names as parameters which are objects with ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Here besides pages itself you add modals, overlays and other components which will be registered in navigation (i.e. ",(0,i.jsx)(n.code,{children:"registerNavigationComponent"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"registerNavigationComponent"})," - shorthand function to simplify registration of a page."]}),"\n",(0,i.jsxs)(n.p,{children:["Such examples are ",(0,i.jsx)(n.code,{children:"toast"})," and ",(0,i.jsx)(n.code,{children:"datePicker"})," properties of ",(0,i.jsx)(n.code,{children:"Pages"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"adding-pages",children:"Adding pages"}),"\n",(0,i.jsxs)(n.p,{children:["To add a page, simply add your own property in ",(0,i.jsx)(n.code,{children:"Pages"})," with ",(0,i.jsx)(n.code,{children:"id"})," and ",(0,i.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"registering-pages",children:"Registering pages"}),"\n",(0,i.jsxs)(n.p,{children:["All the pages are being registered in ",(0,i.jsx)(n.code,{children:"src/navigation/navigation.ts"}),"'s ",(0,i.jsx)(n.code,{children:"registerComponents"})," function which is being called at initialization of application."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export function registerComponents() {\n    if (__DEV__) {\n        registerNavigationComponent(Pages.storybook, StorybookUIRoot);\n    }\n    registerNavigationComponent(Pages.splash, Splash, true);\n    registerNavigationComponent(Pages.onboarding, Onboarding);\n    registerNavigationComponent(Pages.main, Main);\n    registerNavigationComponent(Pages.search, Search);\n    registerNavigationComponent(Pages.settings, Settings);\n    registerNavigationComponent(Pages.toast, ToastOverlay);\n    registerNavigationComponent(Pages.datePicker, DatePickerOverlay);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If your page or component is going to be a simple component which won't be communication with ",(0,i.jsx)(n.code,{children:"redux"})," then you can simply register it the next way:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"  registerNavigationComponent(Pages.yourPage, YourPage);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Otherwise, add a third parameter with ",(0,i.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"  registerNavigationComponent(Pages.yourPage, YourPage, true);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The communication with ",(0,i.jsx)(n.code,{children:"redux"})," and usage will be explained later."]}),"\n",(0,i.jsx)(n.h2,{id:"using-pages",children:"Using pages"}),"\n",(0,i.jsx)(n.p,{children:"Create a simple function component like so and describe its options if needed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:'export const YourPage: NavigationFunctionComponent = (): JSX.Element => {\n  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1} />;\n};\n\nYourPage.options = {\n  topBar: {\n    largeTitle: {\n      visible: true,\n    },\n    searchBar: {\n      visible: false,\n    },\n    title: {\n      text: localization.pages.yourPage,\n    },\n  },\n};\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,i.jsxs)(n.p,{children:["Try to use ",(0,i.jsx)(n.code,{children:"ScrollView"})," as your parent component in order to have the best behavior on iOS."]})})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(7294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);