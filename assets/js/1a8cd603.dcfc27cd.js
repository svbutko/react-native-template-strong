"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4522],{5876:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(5893),i=n(1151);const a={sidebar_position:6,title:"Hooks"},s=void 0,r={id:"navigation/hooks",title:"Hooks",description:"Content",source:"@site/docs/navigation/hooks.md",sourceDirName:"navigation",slug:"/navigation/hooks",permalink:"/react-native-template-strong/docs/navigation/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/navigation/hooks.md",tags:[],version:"current",lastUpdatedAt:1633518181,formattedLastUpdatedAt:"Oct 6, 2021",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Hooks"},sidebar:"tutorialSidebar",previous:{title:"Overlays and modals",permalink:"/react-native-template-strong/docs/navigation/overlays-and-modals"},next:{title:"Actions",permalink:"/react-native-template-strong/docs/navigation/actions"}},c={},d=[{value:"Content",id:"content",level:2}];function p(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"content",children:"Content"}),"\n",(0,o.jsxs)(e.p,{children:["React Native Navigation offers its own event handling using but for convenience it's advisable to use ",(0,o.jsx)(e.a,{href:"https://underscopeio.github.io/react-native-navigation-hooks/docs/before-you-start",children:"React Native Navigation Hooks"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"It's already installed in this template."}),"\n",(0,o.jsx)(e.p,{children:"Check it out how it works and what it offers."}),"\n",(0,o.jsxs)(e.admonition,{title:"Tip",type:"tip",children:[(0,o.jsxs)(e.p,{children:["When using navigation hooks don't use ",(0,o.jsx)(e.code,{children:"NavigationProvider"})," and ",(0,o.jsx)(e.code,{children:"withNavigationProvider"}),", better supply it with ",(0,o.jsx)(e.code,{children:"componentId"}),":"]}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",metastring:"jsx",children:"import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = ({ componentId }) => {\n  useNavigationComponentDidAppear(\n    (e) => {\n      console.warn(`${e.componentName} appeared`)\n    },\n    { componentId }\n  )\n\n  return <Text>Example Screen</Text>\n}\n"})})]})]})}function l(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>s});var o=n(7294);const i={},a=o.createContext(i);function s(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);