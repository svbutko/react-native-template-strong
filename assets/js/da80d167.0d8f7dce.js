"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2,title:"Default options"},i=void 0,l={unversionedId:"navigation/default-options",id:"navigation/default-options",title:"Default options",description:"Content",source:"@site/docs/navigation/default-options.md",sourceDirName:"navigation",slug:"/navigation/default-options",permalink:"/react-native-template-strong/docs/navigation/default-options",draft:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/navigation/default-options.md",tags:[],version:"current",lastUpdatedAt:1633518181,formattedLastUpdatedAt:"Oct 6, 2021",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Default options"},sidebar:"tutorialSidebar",previous:{title:"Before starting",permalink:"/react-native-template-strong/docs/navigation/before-starting"},next:{title:"Pages",permalink:"/react-native-template-strong/docs/navigation/pages"}},s={},p=[{value:"Content",id:"content",level:2},{value:"Options",id:"options",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"content"},"Content"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wix.github.io/react-native-navigation/api/options-api#setdefaultoptions"},"Default options")," are being set in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/navigation/navigation.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'export function setDefaultOptions() {\n  Navigation.setDefaultOptions({\n    animations: {\n      setRoot: {\n        waitForRender: true,\n      },\n      setStackRoot: {\n        waitForRender: true,\n      },\n    },\n    layout: {\n      componentBackgroundColor: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.background),\n    },\n    topBar: {\n      animate: true,\n      drawBehind: !isAndroid,\n      background: {\n        translucent: true,\n        color: platformNativeColor(undefined, PlatformColorsAndroid.navigation),\n      },\n      title: {\n        color: platformNativeColor(undefined, PlatformColorsAndroid.onPrimaryText),\n      },\n      largeTitle: {\n        visible: false,\n      },\n      scrollEdgeAppearance: {\n        active: true,\n        noBorder: true,\n      },\n      searchBar: {\n        visible: false,\n        hideOnScroll: true,\n        hideTopBarOnFocus: true,\n        obscuresBackgroundDuringPresentation: true,\n      },\n      hideNavBarOnFocusSearchBar: true,\n      searchBarHiddenWhenScrolling: true,\n      searchBarPlaceholder: localization.common.search,\n      noBorder: false,\n    },\n    bottomTabs: {\n      animate: true,\n      hideShadow: false,\n      translucent: true,\n      animateTabSelection: true,\n      preferLargeIcons: false,\n      tabsAttachMode: "together",\n      backgroundColor: platformNativeColor(undefined, PlatformColorsAndroid.navigation),\n      ...Platform.select({\n        android: {\n          translucent: false,\n          borderWidth: 1,\n          borderColor: platformNativeColor(undefined, PlatformColorsAndroid.divider),\n        },\n      }),\n    },\n    bottomTab: {\n      selectedTextColor: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.onPrimaryText),\n      selectedIconColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.onPrimaryText),\n      textColor: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.onPrimaryTextOpacity),\n      iconColor: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.onPrimaryTextOpacity),\n    },\n    statusBar: {\n      backgroundColor: platformNativeColor(undefined, PlatformColorsAndroid.statusbar),\n      visible: true,\n    },\n  });\n}\n')),(0,r.kt)("p",null,"Here we are setting default options which will be applied to every navigation component which will be created in application."),(0,r.kt)("p",null,"So rather than changing lots of different options in pages, modals, overlays, tabs, it's more convenient to do it once\nand then apply needed changes to certain navigation components."),(0,r.kt)("p",null,"These options are being applied ad the application's initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"export function initializeApp() {\n    ...\n  setDefaultOptions();\n    ...\n}\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"The options which are provided with template are very close to the stock iOS and Android applications."),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("p",null,"Bars are translucent, in stacks the large title is present and tint color is ",(0,r.kt)("inlineCode",{parentName:"p"},"systemBlue"),"."),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("p",null,"Bars' background is set to follow the Material's primary color while ",(0,r.kt)("inlineCode",{parentName:"p"},"light")," theme is on, and they are dark when ",(0,r.kt)("inlineCode",{parentName:"p"},"dark")," theme is on."),(0,r.kt)("p",null,"Bottom bar animation is present."),(0,r.kt)("p",null,"Status bar changes its color accordingly to theme."))}u.isMDXComponent=!0}}]);