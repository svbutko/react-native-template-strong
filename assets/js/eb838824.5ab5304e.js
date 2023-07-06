"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:20,title:"Patches"},i=void 0,s={unversionedId:"patches",id:"patches",title:"Patches",description:"Content",source:"@site/docs/patches.md",sourceDirName:".",slug:"/patches",permalink:"/react-native-template-strong/docs/patches",draft:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/patches.md",tags:[],version:"current",lastUpdatedAt:1633518181,formattedLastUpdatedAt:"Oct 6, 2021",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Patches"},sidebar:"tutorialSidebar",previous:{title:"Types",permalink:"/react-native-template-strong/docs/types"},next:{title:"App icon",permalink:"/react-native-template-strong/docs/app-icon"}},c={},p=[{value:"Content",id:"content",level:2},{value:"Usage",id:"usage",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"content"},"Content"),(0,a.kt)("p",null,"Work with patches made possible by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ds300/patch-package"},"patch-package"),"."),(0,a.kt)("p",null,"Sometimes it's needed to make changes in packages from ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("p",null,"There might be an error, mistake, or you need to adjust module to your needs."),(0,a.kt)("p",null,"The best possible way to do so is to make a fork and propose your changes.\nBut this might take some time to accept your changes, or maintainer refuses to accept them,\nor even worse, dependency is not maintained anymore."),(0,a.kt)("p",null,"To handle this situation the best possible way is to make a local patch."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"First make changes to the files of a particular package in your ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder, then run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx patch-package package-name\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"package-name")," matches the name of the package you made changes to."))}m.isMDXComponent=!0}}]);