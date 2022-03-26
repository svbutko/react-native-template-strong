"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2239],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9111:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:1,title:"iOS internals"},s=void 0,p={unversionedId:"internals/ios",id:"internals/ios",title:"iOS internals",description:"Hermes",source:"@site/docs/internals/ios.md",sourceDirName:"internals",slug:"/internals/ios",permalink:"/react-native-template-strong/docs/internals/ios",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/internals/ios.md",tags:[],version:"current",lastUpdatedAt:1633194349,formattedLastUpdatedAt:"10/2/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"iOS internals"},sidebar:"tutorialSidebar",previous:{title:"Babel config",permalink:"/react-native-template-strong/docs/configs/babel-config"},next:{title:"Android internals",permalink:"/react-native-template-strong/docs/internals/android"}},c={},u=[{value:"Hermes",id:"hermes",level:2},{value:"Pods",id:"pods",level:2},{value:"Versions",id:"versions",level:2},{value:"Devices",id:"devices",level:2},{value:"Orientations",id:"orientations",level:2},{value:"Flipper",id:"flipper",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hermes"},"Hermes"),(0,o.kt)("p",null,"Enabled"),(0,o.kt)("h2",{id:"pods"},"Pods"),(0,o.kt)("p",null,"There's a pods post installation action which bumps deployment target version of each pod to ",(0,o.kt)("inlineCode",{parentName:"p"},"13.0"),"\n(only ",(0,o.kt)("inlineCode",{parentName:"p"},"RCT-Folly")," stays on ",(0,o.kt)("inlineCode",{parentName:"p"},"11.0")," due to to a bug)."),(0,o.kt)("h2",{id:"versions"},"Versions"),(0,o.kt)("p",null,"Deployment target is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"13.0")," later in plans to change it to ",(0,o.kt)("inlineCode",{parentName:"p"},"14.0"),"."),(0,o.kt)("h2",{id:"devices"},"Devices"),(0,o.kt)("p",null,"It supports iPhones and iPads"),(0,o.kt)("h2",{id:"orientations"},"Orientations"),(0,o.kt)("p",null,"All unlocked (locked in React Native by device type)"),(0,o.kt)("h2",{id:"flipper"},"Flipper"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Flipper")," is disabled in ",(0,o.kt)("inlineCode",{parentName:"p"},"podfile")," due to the fact that it increases app size and goes in production as a pod too,\nyou can enable it while testing but don't forget to comment it back."))}f.isMDXComponent=!0}}]);