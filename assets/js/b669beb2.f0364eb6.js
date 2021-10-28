"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3118],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},651:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,title:"Splash"},p=void 0,c={unversionedId:"pages/splash",id:"pages/splash",isDocsHomePage:!1,title:"Splash",description:"Content",source:"@site/docs/pages/splash.md",sourceDirName:"pages",slug:"/pages/splash",permalink:"/react-native-template-strong/docs/pages/splash",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/pages/splash.md",tags:[],version:"current",lastUpdatedAt:1633686498,formattedLastUpdatedAt:"10/8/2021",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Splash"},sidebar:"tutorialSidebar",previous:{title:"Native splash",permalink:"/react-native-template-strong/docs/pages/native-splash"},next:{title:"Onboarding",permalink:"/react-native-template-strong/docs/pages/onboarding"}},l=[{value:"Content",id:"content",children:[],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"content"},"Content"),(0,a.kt)("p",null,"It's React Native navigation page which at this moment shows ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadingComponent"),"."),(0,a.kt)("p",null,"You can try to adjust it to show replicate the native splash, or add some animation here."),(0,a.kt)("p",null,"This page is primarily used to implement initial navigation root setting by checking different parameters."),(0,a.kt)("p",null,"For example, now it checks whether user opens this app first time or not in order to show him ",(0,a.kt)("inlineCode",{parentName:"p"},"Onboarding"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"export const Splash: NavigationFunctionComponent = () => {\n  const isOnboardingVisited = useAppSelector((state) => state.system.isOnboardingVisited);\n\n  useEffect(() => {\n    if (isOnboardingVisited) {\n      setTabsRoot();\n    } else if (isIos) {\n      setTabsRoot(showOnboarding);\n    } else {\n      setOnboardingRoot();\n    }\n  }, [isOnboardingVisited]);\n\n  return <LoadingComponent />;\n};\n")),(0,a.kt)("p",null,"You can also implement your checks here (e.g. is logged in or not)."))}d.isMDXComponent=!0}}]);