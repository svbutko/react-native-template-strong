"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8655],{951:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=l(4848),n=l(8453);const r={sidebar_position:12,title:"shareHelpers"},i=void 0,a={id:"helpers/share-helpers",title:"shareHelpers",description:"Content",source:"@site/docs/helpers/share-helpers.md",sourceDirName:"helpers",slug:"/helpers/share-helpers",permalink:"/react-native-template-strong/docs/helpers/share-helpers",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/helpers/share-helpers.md",tags:[],version:"current",lastUpdatedAt:1634109907e3,sidebarPosition:12,frontMatter:{sidebar_position:12,title:"shareHelpers"},sidebar:"tutorialSidebar",previous:{title:"netInfoHelpers",permalink:"/react-native-template-strong/docs/helpers/net-info-helpers"},next:{title:"Validations",permalink:"/react-native-template-strong/docs/validations"}},d={},h=[{value:"Content",id:"content",level:2},{value:"showShareDialog",id:"showsharedialog",level:3},{value:"Params",id:"params",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"showShareSocialDialog",id:"showsharesocialdialog",level:3},{value:"Params",id:"params-1",level:4},{value:"Usage example",id:"usage-example-1",level:4},{value:"isPackageInstalled",id:"ispackageinstalled",level:3},{value:"Params",id:"params-2",level:4},{value:"Usage example",id:"usage-example-2",level:4}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,s.jsxs)(t.p,{children:["Set of share functions, made possible by ",(0,s.jsx)(t.a,{href:"https://github.com/react-native-share/react-native-share",children:"react-native-share"}),".\nCheck the docs to learn more."]}),"\n",(0,s.jsx)(t.h3,{id:"showsharedialog",children:"showShareDialog"}),"\n",(0,s.jsx)(t.p,{children:"Shows share dialog with provided options and optional callbacks."}),"\n",(0,s.jsx)(t.h4,{id:"params",children:"Params"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"options"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ShareOptions"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Share options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"completedCallback"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"(result: ShareOpenResult) => void"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Callback when user completed share action with result parameters"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"errorCallback"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"(error: Error or unknown) => void"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Error callback when something went wrong or user didn't share anything"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"usage-example",children:"Usage example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:'  const onShowShareDialogPress = useCallback(async () => {\n    await showShareDialog(\n        {\n            showAppsToView: true,\n            message: "Test message to share",\n        },\n        (result) => {\n            console.warn("Share result: ", result);\n        },\n        (error) => {\n            console.error("Share error: ", error);\n        },\n    );\n}, []);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"showsharesocialdialog",children:"showShareSocialDialog"}),"\n",(0,s.jsx)(t.p,{children:"Shows share to social network dialog with provided options and optional callbacks. If the app is not installed then tries to open the web page of social network."}),"\n",(0,s.jsx)(t.h4,{id:"params-1",children:"Params"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"options"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ShareSingleOptions"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Share options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"completedCallback"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"(result: ShareSingleResult) => void"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Callback when user completed share action with result parameters"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"errorCallback"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"(error: Error or unknown) => void"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Error callback when something went wrong or user didn't share anything"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"usage-example-1",children:"Usage example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:'  const onShowShareSocialDialogPress = useCallback(async () => {\n    await showShareSocialDialog(\n        {\n            social: Share.Social.TWITTER,\n            title: "Share via",\n            message: "Twitter test message from template",\n            url: "",\n        },\n        (result) => {\n            console.warn("Share result: ", result);\n        },\n        (error) => {\n            console.error("Share error: ", error);\n        },\n    );\n}, []);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"ispackageinstalled",children:"isPackageInstalled"}),"\n",(0,s.jsxs)(t.p,{children:["Checks whether the package installed, on Android uses the share check, on iOS checks using ",(0,s.jsx)(t.code,{children:"Linking.canOpenURL"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"params-2",children:"Params"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"androidPackageName"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Android package name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"iosUrl"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"iOS package URI"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"usage-example-2",children:"Usage example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:'await isPackageInstalled("com.instagram.android", "instagram://");\n'})})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>a});var s=l(6540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);