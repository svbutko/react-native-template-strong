"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3118],{5132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var s=n(5893),i=n(1151);const o={sidebar_position:2,title:"Splash"},a=void 0,r={unversionedId:"pages/splash",id:"pages/splash",title:"Splash",description:"Content",source:"@site/docs/pages/splash.md",sourceDirName:"pages",slug:"/pages/splash",permalink:"/react-native-template-strong/docs/pages/splash",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/pages/splash.md",tags:[],version:"current",lastUpdatedAt:1633686498,formattedLastUpdatedAt:"Oct 8, 2021",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Splash"},sidebar:"tutorialSidebar",previous:{title:"Native splash",permalink:"/react-native-template-strong/docs/pages/native-splash"},next:{title:"Onboarding",permalink:"/react-native-template-strong/docs/pages/onboarding"}},c={},p=[{value:"Content",id:"content",level:2}];function d(e){const t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,s.jsxs)(t.p,{children:["It's React Native navigation page which at this moment shows ",(0,s.jsx)(t.code,{children:"LoadingComponent"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"You can try to adjust it to show replicate the native splash, or add some animation here."}),"\n",(0,s.jsx)(t.p,{children:"This page is primarily used to implement initial navigation root setting by checking different parameters."}),"\n",(0,s.jsxs)(t.p,{children:["For example, now it checks whether user opens this app first time or not in order to show him ",(0,s.jsx)(t.code,{children:"Onboarding"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:"export const Splash: NavigationFunctionComponent = () => {\n  const isOnboardingVisited = useAppSelector((state) => state.system.isOnboardingVisited);\n\n  useEffect(() => {\n    if (isOnboardingVisited) {\n      setTabsRoot();\n    } else if (isIos) {\n      setTabsRoot(showOnboarding);\n    } else {\n      setOnboardingRoot();\n    }\n  }, [isOnboardingVisited]);\n\n  return <LoadingComponent />;\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can also implement your checks here (e.g. is logged in or not)."})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>o});var s=n(7294);const i=s.createContext({});function o(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:o(e),s.createElement(i.Provider,{value:r},t)}}}]);