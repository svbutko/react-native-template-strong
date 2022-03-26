"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9702],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,u=d["".concat(p,".").concat(m)]||d[m]||g[m]||r;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5879:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return g}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],s={sidebar_position:3,title:"Pages"},p=void 0,l={unversionedId:"navigation/pages",id:"navigation/pages",title:"Pages",description:"Content",source:"@site/docs/navigation/pages.md",sourceDirName:"navigation",slug:"/navigation/pages",permalink:"/react-native-template-strong/docs/navigation/pages",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/navigation/pages.md",tags:[],version:"current",lastUpdatedAt:1633518181,formattedLastUpdatedAt:"10/6/2021",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Pages"},sidebar:"tutorialSidebar",previous:{title:"Default options",permalink:"/react-native-template-strong/docs/navigation/default-options"},next:{title:"Roots",permalink:"/react-native-template-strong/docs/navigation/roots"}},c={},g=[{value:"Content",id:"content",level:2},{value:"Adding pages",id:"adding-pages",level:2},{value:"Registering pages",id:"registering-pages",level:2},{value:"Using pages",id:"using-pages",level:2}],d={toc:g};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"content"},"Content"),(0,r.kt)("p",null,"Pages constants are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/navigation/pages.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'export const Pages = {\n  storybook: {\n    id: "STORYBOOK",\n    name: "Storybook",\n  },\n  splash: {\n    id: "SPLASH_SCREEN",\n    name: "SplashScreen",\n  },\n  onboarding: {\n    id: "ONBOARDING_SCREEN",\n    name: "OnboardingScreen",\n  },\n  toast: {\n    id: "TOAST",\n    name: "ToastOverlay",\n  },\n  datePicker: {\n    id: "DATE_PICKER",\n    name: "DatePickerOverlay",\n  },\n  tabs: {\n    id: "BOTTOM_TABS",\n    name: "BottomTabs",\n  },\n  main: {\n    id: "MAIN_SCREEN",\n    name: "MainScreen",\n  },\n  search: {\n    id: "SEARCH_SCREEN",\n    name: "SearchScreen",\n  },\n  settings: {\n    id: "SETTINGS_SCREEN",\n    name: "SettingsScreen",\n  },\n};\n')),(0,r.kt)("p",null,"Pages are defined as the object which contains page names as parameters which are objects with ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("p",null,"Here besides pages itself you add modals, overlays and other components which will be registered in navigation (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigation.registerComponent"),")."),(0,r.kt)("p",null,"Such examples are ",(0,r.kt)("inlineCode",{parentName:"p"},"toast")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"datePicker")," properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"Pages"),"."),(0,r.kt)("h2",{id:"adding-pages"},"Adding pages"),(0,r.kt)("p",null,"To add a page, simply add your own property in ",(0,r.kt)("inlineCode",{parentName:"p"},"Pages")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,r.kt)("h2",{id:"registering-pages"},"Registering pages"),(0,r.kt)("p",null,"All the pages are being registered in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/navigation/navigation.ts"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"registerComponents")," function which is being called at initialization of application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function registerComponents() {\n  if (__DEV__) {\n    Navigation.registerComponent(Pages.storybook.name, () => StorybookUIRoot);\n  }\n  Navigation.registerComponent(\n    Pages.splash.name,\n    () => gestureHandlerRootHOC(reduxProvider(Splash)),\n    () => Splash,\n  );\n  Navigation.registerComponent(Pages.onboarding.name, () => Onboarding);\n  Navigation.registerComponent(Pages.main.name, () => Main);\n  Navigation.registerComponent(Pages.search.name, () => Search);\n  Navigation.registerComponent(Pages.settings.name, () => Settings);\n  Navigation.registerComponent(Pages.toast.name, () => ToastOverlay);\n  Navigation.registerComponent(Pages.datePicker.name, () => DatePickerOverlay);\n}\n")),(0,r.kt)("p",null,"If your page or component is going to be a simple component which won't be communication with ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," then you can simply register it the next way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  Navigation.registerComponent(Pages.yourPage.name, () => YourPage);\n")),(0,r.kt)("p",null,"Otherwise, it should be wrapped with ",(0,r.kt)("inlineCode",{parentName:"p"},"gestureHandlerRootHOC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reduxProvider")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  Navigation.registerComponent(\n    Pages.splash.name,\n    () => gestureHandlerRootHOC(reduxProvider(Splash)),\n    () => Splash,\n  );\n")),(0,r.kt)("p",null,"The communication with ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," and usage will be explained later."),(0,r.kt)("h2",{id:"using-pages"},"Using pages"),(0,r.kt)("p",null,"Create a simple function component like so and describe its options if needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'export const YourPage: NavigationFunctionComponent = (): JSX.Element => {\n  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1} />;\n};\n\nYourPage.options = {\n  topBar: {\n    largeTitle: {\n      visible: true,\n    },\n    searchBar: {\n      visible: false,\n    },\n    title: {\n      text: localization.pages.yourPage,\n    },\n  },\n};\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Try to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," as your parent component in order to have the best behavior on iOS."))))}m.isMDXComponent=!0}}]);