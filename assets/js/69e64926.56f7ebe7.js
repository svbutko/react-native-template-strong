"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7444],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},298:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,title:"useFlatListActions"},l=void 0,c={unversionedId:"hooks/use-flat-list-actions",id:"hooks/use-flat-list-actions",isDocsHomePage:!1,title:"useFlatListActions",description:"Content",source:"@site/docs/hooks/use-flat-list-actions.md",sourceDirName:"hooks",slug:"/hooks/use-flat-list-actions",permalink:"/react-native-template-strong/docs/hooks/use-flat-list-actions",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/hooks/use-flat-list-actions.md",tags:[],version:"current",lastUpdatedAt:1633405147,formattedLastUpdatedAt:"10/5/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"useFlatListActions"},sidebar:"tutorialSidebar",previous:{title:"serializeQueryParams",permalink:"/react-native-template-strong/docs/utils/serialize-query-params"},next:{title:"useDebounce",permalink:"/react-native-template-strong/docs/hooks/use-debounce"}},p=[{value:"Content",id:"content",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"content"},"Content"),(0,a.kt)("p",null,"Creates default ",(0,a.kt)("inlineCode",{parentName:"p"},"loadMore"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tryAgain")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pullToRefresh")," request dispatches based on provided ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadState"),"."),(0,a.kt)("p",null,"Works in together with ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatlistWrapper")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SectionListWrapper"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  const {data, error, loadState} = useAppSelector(({offers}) => offers);\n  const {loadMore, tryAgain, pullToRefresh} = useFlatListActions(getCompanyOffers, loadState);\n\n  return (\n    <FlatListWrapper\n      data={data}\n      error={error}\n      renderItem={renderItem}\n      loadState={loadState}\n      tryAgain={tryAgain}\n      onRefresh={pullToRefresh}\n      onEndReached={loadMore}\n    />\n  );\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"getCompanyOffers")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncThunk"),"."))}d.isMDXComponent=!0}}]);