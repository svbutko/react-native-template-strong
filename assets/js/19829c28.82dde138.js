"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9269],{5743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(4848),s=n(8453);const i={sidebar_position:5,title:"SectionListWrapper"},l=void 0,o={id:"components/section-list-wrapper",title:"SectionListWrapper",description:"Content",source:"@site/docs/components/section-list-wrapper.md",sourceDirName:"components",slug:"/components/section-list-wrapper",permalink:"/react-native-template-strong/docs/components/section-list-wrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/components/section-list-wrapper.md",tags:[],version:"current",lastUpdatedAt:1634026274e3,sidebarPosition:5,frontMatter:{sidebar_position:5,title:"SectionListWrapper"},sidebar:"tutorialSidebar",previous:{title:"FlatListWrapper",permalink:"/react-native-template-strong/docs/components/flat-list-wrapper"},next:{title:"IconPlatform",permalink:"/react-native-template-strong/docs/components/icon-platform"}},a={},d=[{value:"Content",id:"content",level:2},{value:"Params",id:"params",level:2},{value:"Usage example",id:"usage-example",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,r.jsxs)(t.p,{children:["Wrapper around ",(0,r.jsx)(t.code,{children:"SectionList"})," which operates based on provided ",(0,r.jsx)(t.code,{children:"LoadState"})," and shows appropriate data."]}),"\n",(0,r.jsx)(t.h2,{id:"params",children:"Params"}),"\n",(0,r.jsxs)(t.p,{children:["Extends ",(0,r.jsx)(t.code,{children:"SectionListProps"})," and additionally adds next properties"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"loadState"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"LoadState"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Load state"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"tryAgain"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"() => void"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Action callback which occurs when pressing on Try Again"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"error"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string or null"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"localization.errors.listErrorTitle"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Error text which will be shown to user in case if ",(0,r.jsx)(t.code,{children:"loadState == LoadState.error"})]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:"  return (\n    <SectionListWrapper\n        stickySectionHeadersEnabled={true}\n        sections={sections}\n        ListHeaderComponent={<BalanceListHeader balance={balance} />}\n        loadState={loadState}\n        renderItem={renderItem}\n        renderSectionHeader={renderSectionHeader}\n        error={error}\n        tryAgain={tryAgain}\n        onRefresh={pullToRefresh}\n        onEndReached={loadMore}\n        ListEmptyComponent={<EmptyView title={localization.empty.payment} description={localization.empty.paymentDescription} />}\n    />\n);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);