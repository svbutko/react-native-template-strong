"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1902],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8063:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={sidebar_position:3,title:"URL openers"},p=void 0,s={unversionedId:"utils/url-openers",id:"utils/url-openers",isDocsHomePage:!1,title:"URL openers",description:"PhoneUrl",source:"@site/docs/utils/url-openers.md",sourceDirName:"utils",slug:"/utils/url-openers",permalink:"/react-native-template-strong/docs/utils/url-openers",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/utils/url-openers.md",tags:[],version:"current",lastUpdatedAt:1633280321,formattedLastUpdatedAt:"10/3/2021",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"URL openers"},sidebar:"tutorialSidebar",previous:{title:"listHandlers",permalink:"/react-native-template-strong/docs/utils/list-handlers"},next:{title:"serializeQueryParams",permalink:"/react-native-template-strong/docs/utils/serialize-query-params"}},u=[{value:"PhoneUrl",id:"phoneurl",children:[],level:2},{value:"MapUrl",id:"mapurl",children:[],level:2},{value:"EmailUrl",id:"emailurl",children:[],level:2},{value:"HttpUrl",id:"httpurl",children:[],level:2},{value:"Create your own handlers",id:"create-your-own-handlers",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"phoneurl"},"PhoneUrl"),(0,l.kt)("p",null,"Opens the system phone application with provided phone number."),(0,l.kt)("p",null,"If the phone won't be provided it will return null."),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'await new PhoneUrl("37322233444").open();\n')),(0,l.kt)("h2",{id:"mapurl"},"MapUrl"),(0,l.kt)("p",null,"Opens a map application or browser with latitude, longitude and address."),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'await new MapUrl(60.59735, 27.63646, "some address").open();\n')),(0,l.kt)("h2",{id:"emailurl"},"EmailUrl"),(0,l.kt)("p",null,"Opens email application with a new email to provided address."),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'await new EmailUrl("test@mail.com").open();\n')),(0,l.kt)("h2",{id:"httpurl"},"HttpUrl"),(0,l.kt)("p",null,"Opens browser or application to handle provided web address."),(0,l.kt)("p",null,"If web address doesn't start with ",(0,l.kt)("inlineCode",{parentName:"p"},"http")," then ",(0,l.kt)("inlineCode",{parentName:"p"},"https://")," will be pasted before the address."),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'await new HttpUrl("google.com").open();\n')),(0,l.kt)("h2",{id:"create-your-own-handlers"},"Create your own handlers"),(0,l.kt)("p",null,"All the previously described openers extend abstract ",(0,l.kt)("inlineCode",{parentName:"p"},"BaseUrlOpener")," which uses ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking"},"Linking.openURL")," under the hood when trying to open your params."),(0,l.kt)("p",null,"You can create your own class extend it from ",(0,l.kt)("inlineCode",{parentName:"p"},"BaseUrlOpener"),", set your own ",(0,l.kt)("inlineCode",{parentName:"p"},"constructor")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"generateUrl"),", like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'export class MyParamUrl extends BaseUrlOpener {\n  //Define your parameters\n  constructor(private myParam: string | null) {\n    super();\n  }\n\n  protected generateUrl(): string | null {\n    if (this.myParam == null) {\n      return null;\n    } else {\n      //Do some action here\n      return "do something";\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);