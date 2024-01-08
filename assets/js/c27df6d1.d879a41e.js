"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9117],{8585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var n=r(5893),s=r(1151);const d={sidebar_position:5,title:"Slice"},a=void 0,i={id:"redux/slice",title:"Slice",description:"Content",source:"@site/docs/redux/slice.md",sourceDirName:"redux",slug:"/redux/slice",permalink:"/react-native-template-strong/docs/redux/slice",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/redux/slice.md",tags:[],version:"current",lastUpdatedAt:1633614778,formattedLastUpdatedAt:"Oct 7, 2021",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Slice"},sidebar:"tutorialSidebar",previous:{title:"State",permalink:"/react-native-template-strong/docs/redux/state"},next:{title:"AsyncThunk",permalink:"/react-native-template-strong/docs/redux/async-thunk"}},c={},o=[{value:"Content",id:"content",level:2},{value:"Creation",id:"creation",level:2},{value:"Adding reducer to RootReducer",id:"adding-reducer-to-rootreducer",level:2},{value:"Case handlers",id:"case-handlers",level:2},{value:"Return newState",id:"return-newstate",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Slices"})," as well as ",(0,n.jsx)(t.code,{children:"AsyncThunks"})," are stored together for better readability and remove need to have additional imports."]}),"\n",(0,n.jsx)(t.h2,{id:"creation",children:"Creation"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Slices"})," are created the same way as described in documentation."]}),"\n",(0,n.jsxs)(t.p,{children:["E.g. ",(0,n.jsx)(t.code,{children:"systemSlice.ts"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'export const {reducer: SystemReducer} = createSlice({\n  name: "system",\n  initialState: SystemInitialState,\n  reducers: {\n    setOnboarding: onboardingHandler,\n  },\n  extraReducers: (builder) => {\n    builder.addCase(REHYDRATE, rehydrate);\n  },\n});\n'})}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"extraReducers"})," don't forget to add the ",(0,n.jsx)(t.code,{children:"REHYDRATE"})," case to set properly store after rehydration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function rehydrate(state: SystemState, rehydrateParams: RehydrateAppAction) {\n  return newState(rehydrateParams.payload?.system || state, {isOnboardingVisited: rehydrateParams.payload != null});\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"adding-reducer-to-rootreducer",children:"Adding reducer to RootReducer"}),"\n",(0,n.jsxs)(t.p,{children:["To see and use our reducer, first it has to be added into ",(0,n.jsx)(t.code,{children:"RootReducer"}),", which is constructed using ",(0,n.jsx)(t.code,{children:"combineReducers"}),"\nand can be found in ",(0,n.jsx)(t.code,{children:"src/core/store/rootReducer.ts"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["E.g. of adding ",(0,n.jsx)(t.code,{children:"SystemReducer"})," into ",(0,n.jsx)(t.code,{children:"RootReducer"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export const rootReducer = combineReducers({\n  system: SystemReducer,\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Parameter should be the same as ",(0,n.jsx)(t.code,{children:"name"})," which was used in ",(0,n.jsx)(t.code,{children:"createSlice"})]}),"\n",(0,n.jsx)(t.h2,{id:"case-handlers",children:"Case handlers"}),"\n",(0,n.jsxs)(t.p,{children:["Case handlers as you could see in example of the ",(0,n.jsx)(t.code,{children:"rehydrate"})," case should be handled as a separate function for better readability."]}),"\n",(0,n.jsx)(t.h2,{id:"return-newstate",children:"Return newState"}),"\n",(0,n.jsxs)(t.p,{children:["Even though ",(0,n.jsx)(t.code,{children:"Immer"})," is used under the hood of the toolkit, it's still better to return ",(0,n.jsx)(t.a,{href:"/react-native-template-strong/docs/utils/new-state",children:"newState"}),"\nrather than change properties directly without returning anything."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function rehydrate(state: SystemState, rehydrateParams: RehydrateAppAction) {\n  return newState(rehydrateParams.payload?.system || state, {isOnboardingVisited: rehydrateParams.payload != null});\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(7294);const s={},d=n.createContext(s);function a(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);