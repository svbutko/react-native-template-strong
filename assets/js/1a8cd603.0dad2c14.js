"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4522],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(v,i(i({ref:t},l),{},{components:n})):o.createElement(v,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5730:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:6,title:"Hooks"},c=void 0,p={unversionedId:"navigation/hooks",id:"navigation/hooks",isDocsHomePage:!1,title:"Hooks",description:"Content",source:"@site/docs/navigation/hooks.md",sourceDirName:"navigation",slug:"/navigation/hooks",permalink:"/react-native-template-strong/docs/navigation/hooks",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/navigation/hooks.md",tags:[],version:"current",lastUpdatedAt:1633518181,formattedLastUpdatedAt:"10/6/2021",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Hooks"},sidebar:"tutorialSidebar",previous:{title:"Overlays and modals",permalink:"/react-native-template-strong/docs/navigation/overlays-and-modals"},next:{title:"Actions",permalink:"/react-native-template-strong/docs/navigation/actions"}},l=[{value:"Content",id:"content",children:[],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"content"},"Content"),(0,a.kt)("p",null,"React Native Navigation offers its own event handling using but for convenience it's advisable to use ",(0,a.kt)("a",{parentName:"p",href:"https://underscopeio.github.io/react-native-navigation-hooks/docs/before-you-start"},"React Native Navigation Hooks"),"."),(0,a.kt)("p",null,"It's already installed in this template."),(0,a.kt)("p",null,"Check it out how it works and what it offers."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When using navigation hooks don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"NavigationProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"withNavigationProvider"),", better supply it with ",(0,a.kt)("inlineCode",{parentName:"p"},"componentId"),":"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = ({ componentId }) => {\n  useNavigationComponentDidAppear(\n    (e) => {\n      console.warn(`${e.componentName} appeared`)\n    },\n    { componentId }\n  )\n\n  return <Text>Example Screen</Text>\n}\n")))))}d.isMDXComponent=!0}}]);