"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7956:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4,title:"Date formatter"},i=void 0,l={unversionedId:"localisation/date-formatter",id:"localisation/date-formatter",title:"Date formatter",description:"Content",source:"@site/docs/localisation/date-formatter.md",sourceDirName:"localisation",slug:"/localisation/date-formatter",permalink:"/react-native-template-strong/docs/localisation/date-formatter",draft:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/localisation/date-formatter.md",tags:[],version:"current",lastUpdatedAt:1634101010,formattedLastUpdatedAt:"Oct 13, 2021",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Date formatter"},sidebar:"tutorialSidebar",previous:{title:"Change language",permalink:"/react-native-template-strong/docs/localisation/change-language"},next:{title:"Intl formatter",permalink:"/react-native-template-strong/docs/localisation/intl-formatter"}},p={},s=[{value:"Content",id:"content",level:2},{value:"Usage",id:"usage",level:2},{value:"Check how it looks",id:"check-how-it-looks",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"content"},"Content"),(0,r.kt)("p",null,"Contains date converters and date formatters based on current language."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DateFormat")," - enum of possible formats you can use (you can add you own)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dateFromString")," - tries to convert string represented as date to ",(0,r.kt)("inlineCode",{parentName:"li"},"Date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dateFromUnknown")," - tries to convert any type possibly represented as date to ",(0,r.kt)("inlineCode",{parentName:"li"},"Date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dateFromFormat")," - takes date and format and returns the formatted string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"calendarDate")," - takes date and formats it to calendar (tomorrow, yesterday, today etc.) date and returns the formatted string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getUnixDate")," - returns given date as ",(0,r.kt)("inlineCode",{parentName:"li"},"unix")," number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getInitialDate")," - takes the date if it exists and returns it otherwise if the date is equal to null returns ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultDate")," or current date")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dateFromString"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'dateFromString("2021-10-01");\n//2021-10-01T00:00:00.000Z as Date\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dateFromUnknown"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"dateFromUnknown(1234567891011);\n//2009-02-13T23:31:31.011Z as Date\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dateFromFormat"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"dateFromFormat(new Date(), DateFormat.yearDateTime);\n//2021.10.04 12:13\n\ndateFromFormat(new Date(), DateFormat.shortMonthYear);\n//Oct 2021\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"calendarDate"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"calendarDate(new Date());\n//Today at 12:14 PM\n\ncalendarDate(new Date(), true)\n//Today\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getUnixDate"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getUnixDate(new Date());\n//1633338938000\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getInitialDate"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'getInitialDate(new Date());\n// 2021-10-04T09:16:17.565Z\n\ngetInitialDate(null, new Date("2012-10-01"));\n//2012-10-01T00:00:00.000Z\n')),(0,r.kt)("h2",{id:"check-how-it-looks"},"Check how it looks"),(0,r.kt)("p",null,"You can open StoryBook and open ",(0,r.kt)("inlineCode",{parentName:"p"},"Format")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Date Formats")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Date Formats Enum")," stories and see how they are being applied."))}m.isMDXComponent=!0}}]);