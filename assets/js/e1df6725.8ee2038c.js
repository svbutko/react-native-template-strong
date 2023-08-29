"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1314],{8578:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=s(5893),o=s(1151);const c={sidebar_position:7,title:"Hooks"},r=void 0,i={unversionedId:"redux/hooks",id:"redux/hooks",title:"Hooks",description:"Content",source:"@site/docs/redux/hooks.md",sourceDirName:"redux",slug:"/redux/hooks",permalink:"/react-native-template-strong/docs/redux/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/redux/hooks.md",tags:[],version:"current",lastUpdatedAt:1689098240,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Hooks"},sidebar:"tutorialSidebar",previous:{title:"AsyncThunk",permalink:"/react-native-template-strong/docs/redux/async-thunk"},next:{title:"Fonts",permalink:"/react-native-template-strong/docs/resources/fonts"}},a={},d=[{value:"Content",id:"content",level:2}];function l(e){const t=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,n.jsxs)(t.p,{children:["Some hooks which are present in ",(0,n.jsx)(t.code,{children:"react-redux"})," have been modified to utilize local store configuration."]}),"\n",(0,n.jsx)(t.p,{children:"These are the changes that were made:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"useDispatch"})," becomes ",(0,n.jsx)(t.code,{children:"useAppDispatch"}),":"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export const useAppDispatch = () => useDispatch<AppDispatch>();\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"useSelector"})," becomes ",(0,n.jsx)(t.code,{children:"useAppSelector"}),":"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"createAsyncThunk"})," becomes ",(0,n.jsx)(t.code,{children:"createAppAsyncThunk"}),":"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export const createAppAsyncThunk = createAsyncThunk.withTypes<{\n    state: RootState;\n    dispatch: AppDispatch;\n}>();\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},1151:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>c});var n=s(7294);const o=n.createContext({});function c(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:c(e),n.createElement(o.Provider,{value:i},t)}}}]);