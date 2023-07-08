"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,title:"Getting started"},i=void 0,s={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Before you start",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/react-native-template-strong/docs/getting-started",draft:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/getting-started.md",tags:[],version:"current",lastUpdatedAt:1688852492,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting started"},sidebar:"tutorialSidebar",next:{title:"Project",permalink:"/react-native-template-strong/docs/structure/project"}},l={},p=[{value:"Before you start",id:"before-you-start",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"After usage",id:"after-usage",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"before-you-start"},"Before you start"),(0,n.kt)("p",null,"If you are new to React Native, it would be better to learn a bit about it first by\n",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/getting-started"},"checking its website")," and then come back here."),(0,n.kt)("p",null,"To work with this template you have to install everything what's needed in order to work with React Native,\nmake sure you have ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"environment ready to work with"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"These are the versions of tools on which this template was created and tested (higher versions should be also supported):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio Flamingo | 2022.2.1 Patch 2"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Gradle 7.4.2"),(0,n.kt)("li",{parentName:"ul"},"JDK 11 (Zulu 11)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/xcode/id497799835?mt=12"},"XCode 14.3.1 (14E300c)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node 20.4.0"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"npm 9.7.2")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npx --force react-native init MyApp --template react-native-template-strong --npm\n")),(0,n.kt)("h2",{id:"after-usage"},"After usage"),(0,n.kt)("p",null,"I strongly advise you to be patient, and check documentation to know about all available features."),(0,n.kt)("p",null,"If you have any questions regarding any particular decision check ",(0,n.kt)("a",{parentName:"p",href:"../faq"},"FAQ"),"\nor ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/svbutko/react-native-template-strong/issues/new/choose"},"ask a question"),"\nor ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/svbutko/react-native-template-strong/discussions"},"create a discussion"),"."),(0,n.kt)("p",null,"If you have any questions you can check the ",(0,n.kt)("a",{parentName:"p",href:"../troubleshooting"},"troubleshooting")," section."))}d.isMDXComponent=!0}}]);