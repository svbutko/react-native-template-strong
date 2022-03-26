"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2188],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:7,title:"TouchablePlatform"},p=void 0,c={unversionedId:"components/touchable-platform",id:"components/touchable-platform",title:"TouchablePlatform",description:"Content",source:"@site/docs/components/touchable-platform.md",sourceDirName:"components",slug:"/components/touchable-platform",permalink:"/react-native-template-strong/docs/components/touchable-platform",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/components/touchable-platform.md",tags:[],version:"current",lastUpdatedAt:1634026274,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"TouchablePlatform"},sidebar:"tutorialSidebar",previous:{title:"IconPlatform",permalink:"/react-native-template-strong/docs/components/icon-platform"},next:{title:"LoadingComponent",permalink:"/react-native-template-strong/docs/components/loading-component"}},s={},m=[{value:"Content",id:"content",level:2},{value:"Params",id:"params",level:2},{value:"Usage example",id:"usage-example",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("p",null,"Platform-friendly touchable button which relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable"),".\nUsed in ",(0,o.kt)("inlineCode",{parentName:"p"},"PrimaryButton")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton"),"."),(0,o.kt)("h2",{id:"params"},"Params"),(0,o.kt)("p",null,"Extends ",(0,o.kt)("inlineCode",{parentName:"p"},"PressableProps")," and additionally adds next properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"style"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ViewStyle or ViewStyle[]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"False"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Style of button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"highlightColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string or OpaqueColorValue")),(0,o.kt)("td",{parentName:"tr",align:"left"},"False"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"PlatformColorsIOS.quaternarySystemFill")," on iOS and ",(0,o.kt)("inlineCode",{parentName:"td"},"PlatformColorsAndroid.primaryLight")," on Android"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Highlight color used as ripple color on Android and when pressed background color on iOS")))),(0,o.kt)("h2",{id:"usage-example"},"Usage example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"    <TouchablePlatform style={styles.container} onPress={onButtonPress}>\n      <Text style={labelStyle} numberOfLines={1}>\n        {label}\n      </Text>\n    </TouchablePlatform>\n")))}d.isMDXComponent=!0}}]);