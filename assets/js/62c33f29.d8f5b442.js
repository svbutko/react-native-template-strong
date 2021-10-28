"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9102],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),f=a,u=c["".concat(p,".").concat(f)]||c[f]||s[f]||l;return n?r.createElement(u,i(i({ref:e},m),{},{components:n})):r.createElement(u,i({ref:e},m))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3496:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1,title:"PrimaryButton"},p=void 0,d={unversionedId:"components/primary-button",id:"components/primary-button",isDocsHomePage:!1,title:"PrimaryButton",description:"Content",source:"@site/docs/components/primary-button.md",sourceDirName:"components",slug:"/components/primary-button",permalink:"/react-native-template-strong/docs/components/primary-button",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/components/primary-button.md",tags:[],version:"current",lastUpdatedAt:1634026274,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PrimaryButton"},sidebar:"tutorialSidebar",previous:{title:"Common constants",permalink:"/react-native-template-strong/docs/common-constants"},next:{title:"PrimaryTextInput",permalink:"/react-native-template-strong/docs/components/primary-text-input"}},m=[{value:"Content",id:"content",children:[],level:2},{value:"Params",id:"params",children:[],level:2},{value:"Usage example",id:"usage-example",children:[],level:2}],s={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"content"},"Content"),(0,l.kt)("p",null,"Primary button of project which should be used as a button component. Provides several built-in type scenarios."),(0,l.kt)("h2",{id:"params"},"Params"),(0,l.kt)("p",null,"Extends ",(0,l.kt)("inlineCode",{parentName:"p"},"PressableProps")," and additionally adds next properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Label of button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ButtonType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Button type based on which different styles will be shown")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"rounded"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Should the corners be rounded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Style of container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"icon"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ImageURISource")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Custom icon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"iconStyle"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"StyleProp<ImageStyle>")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Custom icon's style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"platformIconProps"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"IIconPlatformProps")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Platform icon props which will be used if ",(0,l.kt)("inlineCode",{parentName:"td"},"icon")," is not provided")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"labelStyle"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TextStyle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Label's style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isLoading"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Shows activity indicator")))),(0,l.kt)("h2",{id:"usage-example"},"Usage example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'      <PrimaryButton type={ButtonType.solid} label={"Select date"} onPress={onPress} />\n')))}c.isMDXComponent=!0}}]);