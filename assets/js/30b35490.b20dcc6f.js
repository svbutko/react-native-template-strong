"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7952],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},822:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:7,title:"Actions"},c=void 0,p={unversionedId:"navigation/actions",id:"navigation/actions",isDocsHomePage:!1,title:"Actions",description:"Content",source:"@site/docs/navigation/actions.md",sourceDirName:"navigation",slug:"/navigation/actions",permalink:"/react-native-template-strong/docs/navigation/actions",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/navigation/actions.md",tags:[],version:"current",lastUpdatedAt:1633518181,formattedLastUpdatedAt:"10/6/2021",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Actions"},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/react-native-template-strong/docs/navigation/hooks"},next:{title:"Before starting",permalink:"/react-native-template-strong/docs/redux/before-starting"}},l=[{value:"Content",id:"content",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"content"},"Content"),(0,r.kt)("p",null,"There are a couple basic actions which were added in addition to what React Native Navigation offers."),(0,r.kt)("p",null,"These actions are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/navigation/helpers/navigationActions/ts"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigateToPage")," - simple navigation to page using ",(0,r.kt)("inlineCode",{parentName:"li"},"Pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigateWithoutTabs")," - if you want to navigate to page without showing tabs.")),(0,r.kt)("p",null,"Both of these actions require ",(0,r.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"componentId"),"."),(0,r.kt)("p",null,"Optionally you can provide your own ",(0,r.kt)("inlineCode",{parentName:"p"},"passProps")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Simple case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  const onFaqPress = useCallback(() => {\n    navigateWithoutTabs(Pages.faq, componentId);\n  }, [componentId]);\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"passProps")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  const onSuccess = useCallback(\n    (confirmation: FirebaseAuthTypes.ConfirmationResult) => {\n      navigateWithoutTabs<ICodeConfirmationProps>(\n        Pages.confirmation,\n        componentId,\n        {\n          phone: phone,\n          formattedPhone: formattedPhone,\n          confirmation: confirmation,\n        },\n        {\n          topBar: {\n            title: {\n              text: localization.pages.signIn,\n            },\n          },\n        },\n      );\n    },\n    [phone, formattedPhone, componentId],\n  );\n")))}d.isMDXComponent=!0}}]);