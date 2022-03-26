"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[915],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6484:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4,title:"Intl formatter"},c=void 0,s={unversionedId:"localisation/intl-formatter",id:"localisation/intl-formatter",title:"Intl formatter",description:"Content",source:"@site/docs/localisation/intl-formatter.md",sourceDirName:"localisation",slug:"/localisation/intl-formatter",permalink:"/react-native-template-strong/docs/localisation/intl-formatter",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/localisation/intl-formatter.md",tags:[],version:"current",lastUpdatedAt:1633405147,formattedLastUpdatedAt:"10/5/2021",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Intl formatter"},sidebar:"tutorialSidebar",previous:{title:"Date formatter",permalink:"/react-native-template-strong/docs/localisation/date-formatter"},next:{title:"Environments",permalink:"/react-native-template-strong/docs/environments"}},p={},u=[{value:"Content",id:"content",level:2},{value:"Usage",id:"usage",level:2},{value:"Check how it looks",id:"check-how-it-looks",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"intlFormatter")," offers formatting options for numbers, prices, percentage and currencies depending on current language."),(0,o.kt)("p",null,"Next functions are available, and they format numbers based on current language\n(percentage sign or currency sign placement, dot or comma between decimals, how many fraction digits to show)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatPercent")," - formats percentage"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatCurrency")," - formats prices (by default it uses ",(0,o.kt)("inlineCode",{parentName:"li"},"USD")," as currency)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatDecimal")," - formats decimals")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The following results are based on English locale"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"formatPercent"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"formatPercent(25);\n//25%\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"formatCurrency"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'formatCurrency(10000);\n//$10,000\n\nformatCurrency(10000, "EUR");\n//\u20ac10,000\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"formatDecimal"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"formatDecimal(10000);\n//10,000\n")),(0,o.kt)("h2",{id:"check-how-it-looks"},"Check how it looks"),(0,o.kt)("p",null,"You can open StoryBook and open ",(0,o.kt)("inlineCode",{parentName:"p"},"Format")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Intl Formats")," stories and see how they are being applied."))}f.isMDXComponent=!0}}]);