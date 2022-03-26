"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5803],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,y=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(y,o(o({ref:t},d),{},{components:n})):i.createElement(y,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7033:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"FAQ"},l="FAQ",c={type:"mdx",permalink:"/react-native-template-strong/faq",source:"@site/src/pages/faq.md",title:"FAQ",description:"Why react-native-navigation and not react-navigation?",frontMatter:{title:"FAQ"}},d=[{value:"Why react-native-navigation and not react-navigation?",id:"why-react-native-navigation-and-not-react-navigation",level:2},{value:"Why react-native-localization and not i18n?",id:"why-react-native-localization-and-not-i18n",level:2},{value:"Why Redux and not MobX/Context/Apollo?",id:"why-redux-and-not-mobxcontextapollo",level:2},{value:"Why TypeScript?",id:"why-typescript",level:2},{value:"Why not Expo?",id:"why-not-expo",level:2},{value:"Why not use Tailwind for styles?",id:"why-not-use-tailwind-for-styles",level:2},{value:"Why minimum iOS 13 is minimum version?",id:"why-minimum-ios-13-is-minimum-version",level:2},{value:"Does it support macOS/Windows/Web/tvOS?",id:"does-it-support-macoswindowswebtvos",level:2},{value:"Why NPM and not Yarn?",id:"why-npm-and-not-yarn",level:2},{value:"Why there&#39;s no UI library?",id:"why-theres-no-ui-library",level:2},{value:"Why every dependency in package.json has stable version?",id:"why-every-dependency-in-packagejson-has-stable-version",level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"why-react-native-navigation-and-not-react-navigation"},"Why react-native-navigation and not react-navigation?"),(0,r.kt)("p",null,"There are several reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Actually native"),(0,r.kt)("li",{parentName:"ul"},"More native presets/components out of the box"),(0,r.kt)("li",{parentName:"ul"},"Performance is better"),(0,r.kt)("li",{parentName:"ul"},"RAM consumption is less significant (especially on old devices)"),(0,r.kt)("li",{parentName:"ul"},"No need to include lots of additional dependencies to achieve the platform-like screens")),(0,r.kt)("h2",{id:"why-react-native-localization-and-not-i18n"},"Why react-native-localization and not i18n?"),(0,r.kt)("p",null,"My primary reason is how i18n handles translation strings in combination with TypeScript.\nI can set a string in one language and abandon other languages, or I can use non-existent translation string,\nand I won't receive any errors."),(0,r.kt)("p",null,"Additionally, it offers way too many features which aren't needed while developing mobile apps."),(0,r.kt)("p",null,"While react-native-localization brings all what's needed and handles the before mentioned issue."),(0,r.kt)("h2",{id:"why-redux-and-not-mobxcontextapollo"},"Why Redux and not MobX/Context/Apollo?"),(0,r.kt)("p",null,"I believe that redux is the best choice as state management for every application size,\nit's the most mature one, has straightforward set of rules, gives almost full control of what's happening.\nWith RTK it became even easier to work with it."),(0,r.kt)("h2",{id:"why-typescript"},"Why TypeScript?"),(0,r.kt)("p",null,"TypeScript gives better reliability, easy to refactor, read, debug, fixes many errors before seeing them in runtime."),(0,r.kt)("h2",{id:"why-not-expo"},"Why not Expo?"),(0,r.kt)("p",null,"Not every dependency works with Expo, often times there's a need to change something in native code and that will be painful."),(0,r.kt)("h2",{id:"why-not-use-tailwind-for-styles"},"Why not use Tailwind for styles?"),(0,r.kt)("p",null,"I believe creating styles with StyleSheet is more than enough, and if used properly there won't be any need to use any other frameworks."),(0,r.kt)("h2",{id:"why-minimum-ios-13-is-minimum-version"},"Why minimum iOS 13 is minimum version?"),(0,r.kt)("p",null,"I follow the 3 latest major versions approach when working with iOS, since most of the users update quickly.\nStatistics to provide detailed numbers: ",(0,r.kt)("a",{parentName:"p",href:"https://gs.statcounter.com/os-version-market-share/ios/mobile-tablet/worldwide"},"statcounter")),(0,r.kt)("h2",{id:"does-it-support-macoswindowswebtvos"},"Does it support macOS/Windows/Web/tvOS?"),(0,r.kt)("p",null,"No, it doesn't, but I have plans to work with macOS, Windows and tvOS.\nAt this moment it works with iOS, iPadOS, Android and can work with Android TV (not tested)."),(0,r.kt)("h2",{id:"why-npm-and-not-yarn"},"Why NPM and not Yarn?"),(0,r.kt)("p",null,"NPM updates regularly and improves in terms of speed and quality, while Yarn has different versions with major differences."),(0,r.kt)("h2",{id:"why-theres-no-ui-library"},"Why there's no UI library?"),(0,r.kt)("p",null,"There are lots of UI libraries out there and there are different opinions/likings, so you can install the one you like.\nI, personally don't like the idea of using UI libraries since it's harder to update them,\nand sometimes they are hard to modify to one's likings, as for me, it makes more sense to create UI components from the ground."),(0,r.kt)("h2",{id:"why-every-dependency-in-packagejson-has-stable-version"},"Why every dependency in package.json has stable version?"),(0,r.kt)("p",null,"To preserve the current state and neglect issues with new versions,\nI keep all dependencies stable and when there are updates I update manually (even patch fixes) to see what has been changed."))}p.isMDXComponent=!0}}]);