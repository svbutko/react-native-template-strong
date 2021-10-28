"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1889],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5923:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:5,title:"imageHelpers"},p=void 0,s={unversionedId:"helpers/image-helpers",id:"helpers/image-helpers",isDocsHomePage:!1,title:"imageHelpers",description:"Content",source:"@site/docs/helpers/image-helpers.md",sourceDirName:"helpers",slug:"/helpers/image-helpers",permalink:"/react-native-template-strong/docs/helpers/image-helpers",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/helpers/image-helpers.md",tags:[],version:"current",lastUpdatedAt:1633852672,formattedLastUpdatedAt:"10/10/2021",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"imageHelpers"},sidebar:"tutorialSidebar",previous:{title:"dialogsHelpers",permalink:"/react-native-template-strong/docs/helpers/dialogs-helpers"},next:{title:"orientationHelpers",permalink:"/react-native-template-strong/docs/helpers/orientation-helpers"}},c=[{value:"Content",id:"content",children:[{value:"convertCropperImageToBase64",id:"convertcropperimagetobase64",children:[{value:"Params",id:"params",children:[],level:4},{value:"Usage example",id:"usage-example",children:[],level:4}],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"content"},"Content"),(0,i.kt)("p",null,"Used to convert and apply different changes to images"),(0,i.kt)("h3",{id:"convertcropperimagetobase64"},"convertCropperImageToBase64"),(0,i.kt)("p",null,"Converts ",(0,i.kt)("inlineCode",{parentName:"p"},"CropperImage")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-image-crop-picker")," to base64 string using ",(0,i.kt)("inlineCode",{parentName:"p"},"mime")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,i.kt)("h4",{id:"params"},"Params"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"image"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CropperImage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"True"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Picked image as result from ",(0,i.kt)("inlineCode",{parentName:"td"},"react-native-image-crop-picker"))))),(0,i.kt)("h4",{id:"usage-example"},"Usage example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  const onImagePicked = useCallback((nextImage) => {\n    convertCropperImageToBase64(nextImage);\n}, []);\n")))}u.isMDXComponent=!0}}]);