"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1207],{8594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(5893),i=n(1151);const r={sidebar_position:17,title:"API"},o=void 0,a={unversionedId:"api",id:"api",title:"API",description:"Content",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/react-native-template-strong/docs/api",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/api.md",tags:[],version:"current",lastUpdatedAt:1688636932,formattedLastUpdatedAt:"Jul 6, 2023",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"API"},sidebar:"tutorialSidebar",previous:{title:"Environments",permalink:"/react-native-template-strong/docs/environments"},next:{title:"Jest",permalink:"/react-native-template-strong/docs/testing/jest"}},c={},d=[{value:"Content",id:"content",level:2},{value:"Example",id:"example",level:2}];function l(e){const t=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,s.jsxs)(t.p,{children:["This template was primarily made and tested with usage of ",(0,s.jsx)(t.code,{children:"fetch"})," to communicate with API."]}),"\n",(0,s.jsx)(t.p,{children:"But it's up to you to choose what to use."}),"\n",(0,s.jsxs)(t.p,{children:["The API folder is located in ",(0,s.jsx)(t.code,{children:"src/core/api"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["It contains ",(0,s.jsx)(t.code,{children:"dto"})," folder for your API interfaces."]}),"\n",(0,s.jsxs)(t.p,{children:["And ",(0,s.jsx)(t.code,{children:"requests"})," where your requests will be stored."]}),"\n",(0,s.jsx)(t.p,{children:"There is also a set of predefined server headers which can be used to fetch data:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"defaultHeaders"})," - connection ",(0,s.jsx)(t.code,{children:"keep-alive"})," and content type ",(0,s.jsx)(t.code,{children:"application/json"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, there is ",(0,s.jsx)(t.code,{children:"handleFetchJsonResponse"})," a fetch result handler to properly handle errors."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export const ItemApi = {\n    async getData(): Promise<IResponseData> {\n        return await fetch(\n            `${Config.API_URL}/api/getData`,\n            {\n                method: 'GET',\n                headers: defaultHeaders,\n            },\n        ).then(handleFetchJsonResponse);\n    },\n};\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},1151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var s=n(7294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},t)}}}]);