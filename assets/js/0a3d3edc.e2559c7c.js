"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8216],{9694:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=l(4848),a=l(8453);const s={sidebar_position:1,title:"calculatePage"},r=void 0,i={id:"helpers/calculate-page",title:"calculatePage",description:"Content",source:"@site/docs/helpers/calculate-page.md",sourceDirName:"helpers",slug:"/helpers/calculate-page",permalink:"/react-native-template-strong/docs/helpers/calculate-page",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/helpers/calculate-page.md",tags:[],version:"current",lastUpdatedAt:1633852672e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"calculatePage"},sidebar:"tutorialSidebar",previous:{title:"Onboarding",permalink:"/react-native-template-strong/docs/pages/onboarding"},next:{title:"colorHelpers",permalink:"/react-native-template-strong/docs/helpers/color-helpers"}},c={},d=[{value:"Content",id:"content",level:2},{value:"calculatePage",id:"calculatepage",level:3},{value:"Params",id:"params",level:3},{value:"Usage example",id:"usage-example",level:3}];function o(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,n.jsx)(t.p,{children:"Used for next page calculation."}),"\n",(0,n.jsx)(t.h3,{id:"calculatepage",children:"calculatePage"}),"\n",(0,n.jsx)(t.p,{children:"Used to calculate next page which will be requested from remote server by using calculation based on current page size and current page."}),"\n",(0,n.jsx)(t.h3,{id:"params",children:"Params"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"count"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Number"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Current total count of items"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pageSize"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Number"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"20"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Size of items in a page"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"usage-example",children:"Usage example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export async function getOrders(listLength: number, loadState: LoadState) {\n    const page = loadState == LoadState.pullToRefresh || loadState == LoadState.refreshing ? 1 : calculatePage(listLength);\n\n    return await ordersApi.getOrders({\n        page: page,\n        sorting: defaultOrdersSorting,\n    });\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>i});var n=l(6540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);