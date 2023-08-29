"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5165],{7478:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var s=l(5893),t=l(1151);const a={sidebar_position:12,title:"shareHelpers"},r=void 0,i={unversionedId:"helpers/share-helpers",id:"helpers/share-helpers",title:"shareHelpers",description:"Content",source:"@site/docs/helpers/share-helpers.md",sourceDirName:"helpers",slug:"/helpers/share-helpers",permalink:"/react-native-template-strong/docs/helpers/share-helpers",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/helpers/share-helpers.md",tags:[],version:"current",lastUpdatedAt:1634109907,formattedLastUpdatedAt:"Oct 13, 2021",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"shareHelpers"},sidebar:"tutorialSidebar",previous:{title:"netInfoHelpers",permalink:"/react-native-template-strong/docs/helpers/net-info-helpers"},next:{title:"Validations",permalink:"/react-native-template-strong/docs/validations"}},d={},h=[{value:"Content",id:"content",level:2},{value:"showShareDialog",id:"showsharedialog",level:3},{value:"Params",id:"params",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"showShareSocialDialog",id:"showsharesocialdialog",level:3},{value:"Params",id:"params-1",level:4},{value:"Usage example",id:"usage-example-1",level:4},{value:"isPackageInstalled",id:"ispackageinstalled",level:3},{value:"Params",id:"params-2",level:4},{value:"Usage example",id:"usage-example-2",level:4}];function c(e){const n=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"content",children:"Content"}),"\n",(0,s.jsxs)(n.p,{children:["Set of share functions, made possible by ",(0,s.jsx)(n.a,{href:"https://github.com/react-native-share/react-native-share",children:"react-native-share"}),".\nCheck the docs to learn more."]}),"\n",(0,s.jsx)(n.h3,{id:"showsharedialog",children:"showShareDialog"}),"\n",(0,s.jsx)(n.p,{children:"Shows share dialog with provided options and optional callbacks."}),"\n",(0,s.jsx)(n.h4,{id:"params",children:"Params"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"left",children:"Name"}),(0,s.jsx)(n.th,{align:"left",children:"Type"}),(0,s.jsx)(n.th,{align:"left",children:"Required"}),(0,s.jsx)(n.th,{align:"left",children:"Default value"}),(0,s.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"options"}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"ShareOptions"})}),(0,s.jsx)(n.td,{align:"left",children:"True"}),(0,s.jsx)(n.td,{align:"left",children:"-"}),(0,s.jsx)(n.td,{align:"left",children:"Share options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"completedCallback"}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"(result: ShareOpenResult) => void"})}),(0,s.jsx)(n.td,{align:"left",children:"False"}),(0,s.jsx)(n.td,{align:"left",children:"Undefined"}),(0,s.jsx)(n.td,{align:"left",children:"Callback when user completed share action with result parameters"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"errorCallback"}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"(error: Error or unknown) => void"})}),(0,s.jsx)(n.td,{align:"left",children:"False"}),(0,s.jsx)(n.td,{align:"left",children:"Undefined"}),(0,s.jsx)(n.td,{align:"left",children:"Error callback when something went wrong or user didn't share anything"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"usage-example",children:"Usage example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:'  const onShowShareDialogPress = useCallback(async () => {\n    await showShareDialog(\n        {\n            showAppsToView: true,\n            message: "Test message to share",\n        },\n        (result) => {\n            console.warn("Share result: ", result);\n        },\n        (error) => {\n            console.error("Share error: ", error);\n        },\n    );\n}, []);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"showsharesocialdialog",children:"showShareSocialDialog"}),"\n",(0,s.jsx)(n.p,{children:"Shows share to social network dialog with provided options and optional callbacks. If the app is not installed then tries to open the web page of social network."}),"\n",(0,s.jsx)(n.h4,{id:"params-1",children:"Params"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"left",children:"Name"}),(0,s.jsx)(n.th,{align:"left",children:"Type"}),(0,s.jsx)(n.th,{align:"left",children:"Required"}),(0,s.jsx)(n.th,{align:"left",children:"Default value"}),(0,s.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"options"}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"ShareSingleOptions"})}),(0,s.jsx)(n.td,{align:"left",children:"True"}),(0,s.jsx)(n.td,{align:"left",children:"-"}),(0,s.jsx)(n.td,{align:"left",children:"Share options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"completedCallback"}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"(result: ShareSingleResult) => void"})}),(0,s.jsx)(n.td,{align:"left",children:"False"}),(0,s.jsx)(n.td,{align:"left",children:"Undefined"}),(0,s.jsx)(n.td,{align:"left",children:"Callback when user completed share action with result parameters"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"errorCallback"}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"(error: Error or unknown) => void"})}),(0,s.jsx)(n.td,{align:"left",children:"False"}),(0,s.jsx)(n.td,{align:"left",children:"Undefined"}),(0,s.jsx)(n.td,{align:"left",children:"Error callback when something went wrong or user didn't share anything"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"usage-example-1",children:"Usage example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:'  const onShowShareSocialDialogPress = useCallback(async () => {\n    await showShareSocialDialog(\n        {\n            social: Share.Social.TWITTER,\n            title: "Share via",\n            message: "Twitter test message from template",\n            url: "",\n        },\n        (result) => {\n            console.warn("Share result: ", result);\n        },\n        (error) => {\n            console.error("Share error: ", error);\n        },\n    );\n}, []);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ispackageinstalled",children:"isPackageInstalled"}),"\n",(0,s.jsxs)(n.p,{children:["Checks whether the package installed, on Android uses the share check, on iOS checks using ",(0,s.jsx)(n.code,{children:"Linking.canOpenURL"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"params-2",children:"Params"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"left",children:"Name"}),(0,s.jsx)(n.th,{align:"left",children:"Type"}),(0,s.jsx)(n.th,{align:"left",children:"Required"}),(0,s.jsx)(n.th,{align:"left",children:"Default value"}),(0,s.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"androidPackageName"}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{align:"left",children:"False"}),(0,s.jsx)(n.td,{align:"left",children:"Undefined"}),(0,s.jsx)(n.td,{align:"left",children:"Android package name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"iosUrl"}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{align:"left",children:"False"}),(0,s.jsx)(n.td,{align:"left",children:"Undefined"}),(0,s.jsx)(n.td,{align:"left",children:"iOS package URI"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"usage-example-2",children:"Usage example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:'await isPackageInstalled("com.instagram.android", "instagram://");\n'})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},1151:(e,n,l)=>{l.d(n,{Zo:()=>i,ah:()=>a});var s=l(7294);const t=s.createContext({});function a(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:l}){let i;return i=l?"function"==typeof e?e({}):e||r:a(e),s.createElement(t.Provider,{value:i},n)}}}]);