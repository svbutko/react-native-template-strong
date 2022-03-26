"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4942],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2590:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:4,title:"FlatListWrapper"},p=void 0,s={unversionedId:"components/flat-list-wrapper",id:"components/flat-list-wrapper",title:"FlatListWrapper",description:"Content",source:"@site/docs/components/flat-list-wrapper.md",sourceDirName:"components",slug:"/components/flat-list-wrapper",permalink:"/react-native-template-strong/docs/components/flat-list-wrapper",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/components/flat-list-wrapper.md",tags:[],version:"current",lastUpdatedAt:1634026274,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"FlatListWrapper"},sidebar:"tutorialSidebar",previous:{title:"Separator",permalink:"/react-native-template-strong/docs/components/separator"},next:{title:"SectionListWrapper",permalink:"/react-native-template-strong/docs/components/section-list-wrapper"}},c={},d=[{value:"Content",id:"content",level:2},{value:"Params",id:"params",level:2},{value:"Usage example",id:"usage-example",level:2}],m={toc:d};function u(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("p",null,"Wrapper around ",(0,o.kt)("inlineCode",{parentName:"p"},"FlatList")," which operates based on provided ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadState")," and shows appropriate data."),(0,o.kt)("h2",{id:"params"},"Params"),(0,o.kt)("p",null,"Extends ",(0,o.kt)("inlineCode",{parentName:"p"},"FlatListProps")," and additionally adds next properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"loadState"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"LoadState")),(0,o.kt)("td",{parentName:"tr",align:"left"},"True"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Load state")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"tryAgain"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"() => void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"False"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Action callback which occurs when pressing on Try Again")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"error"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string or null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"False"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"localization.errors.listErrorTitle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error text which will be shown to user in case if ",(0,o.kt)("inlineCode",{parentName:"td"},"loadState == LoadState.error"))))),(0,o.kt)("h2",{id:"usage-example"},"Usage example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  return (\n    <FlatListWrapper\n        loadState={loadState}\n        data={data}\n        error={error}\n        renderItem={renderItem}\n        ListEmptyComponent={<EmptyView title={localization.empty.orders} description={localization.empty.ordersDescription} />}\n        tryAgain={tryAgain}\n        onRefresh={pullToRefresh}\n        onEndReached={loadMore}\n        keyExtractor={orderKeyExtractor}\n    />\n);\n")))}u.isMDXComponent=!0}}]);