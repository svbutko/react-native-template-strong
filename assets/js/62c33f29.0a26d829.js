"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9102],{3976:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var n=l(5893),s=l(1151);const i={sidebar_position:1,title:"PrimaryButton"},d=void 0,r={id:"components/primary-button",title:"PrimaryButton",description:"Content",source:"@site/docs/components/primary-button.md",sourceDirName:"components",slug:"/components/primary-button",permalink:"/react-native-template-strong/docs/components/primary-button",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/components/primary-button.md",tags:[],version:"current",lastUpdatedAt:1634026274,formattedLastUpdatedAt:"Oct 12, 2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PrimaryButton"},sidebar:"tutorialSidebar",previous:{title:"Common constants",permalink:"/react-native-template-strong/docs/common-constants"},next:{title:"PrimaryTextInput",permalink:"/react-native-template-strong/docs/components/primary-text-input"}},c={},o=[{value:"Content",id:"content",level:2},{value:"Params",id:"params",level:2},{value:"Usage example",id:"usage-example",level:2}];function x(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"content",children:"Content"}),"\n",(0,n.jsx)(e.p,{children:"Primary button of project which should be used as a button component. Provides several built-in type scenarios."}),"\n",(0,n.jsx)(e.h2,{id:"params",children:"Params"}),"\n",(0,n.jsxs)(e.p,{children:["Extends ",(0,n.jsx)(e.code,{children:"PressableProps"})," and additionally adds next properties"]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Required"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Default value"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"label"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"string"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"True"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Label of button"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"type"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"ButtonType"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"True"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Button type based on which different styles will be shown"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"rounded"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"boolean"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Should the corners be rounded"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"label"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"string"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Style of container"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"icon"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"ImageURISource"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Custom icon"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"iconStyle"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"StyleProp<ImageStyle>"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Custom icon's style"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"platformIconProps"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"IIconPlatformProps"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["Platform icon props which will be used if ",(0,n.jsx)(e.code,{children:"icon"})," is not provided"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"labelStyle"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"TextStyle"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Label's style"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"isLoading"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"boolean"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Shows activity indicator"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-typescript",metastring:"jsx",children:'      <PrimaryButton type={ButtonType.solid} label={"Select date"} onPress={onPress} />\n'})})]})}function a(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(x,{...t})}):x(t)}},1151:(t,e,l)=>{l.d(e,{Z:()=>r,a:()=>d});var n=l(7294);const s={},i=n.createContext(s);function d(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:d(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);