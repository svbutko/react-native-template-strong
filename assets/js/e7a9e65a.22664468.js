"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1910],{5669:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=n(4848),l=n(8453);const o={sidebar_position:16,title:"ToastOverlay"},i=void 0,r={id:"components/toast-overlay",title:"ToastOverlay",description:"Content",source:"@site/docs/components/toast-overlay.md",sourceDirName:"components",slug:"/components/toast-overlay",permalink:"/react-native-template-strong/docs/components/toast-overlay",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/components/toast-overlay.md",tags:[],version:"current",lastUpdatedAt:1634026274e3,sidebarPosition:16,frontMatter:{sidebar_position:16,title:"ToastOverlay"},sidebar:"tutorialSidebar",previous:{title:"DatePickerOverlay",permalink:"/react-native-template-strong/docs/components/date-picker-overlay"},next:{title:"Native splash",permalink:"/react-native-template-strong/docs/pages/native-splash"}},a={},d=[{value:"Content",id:"content",level:2},{value:"Params",id:"params",level:2},{value:"Usage example",id:"usage-example",level:2}];function c(t){const e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"content",children:"Content"}),"\n",(0,s.jsx)(e.admonition,{title:"Do not use this component directly!",type:"danger",children:(0,s.jsxs)(e.p,{children:["Use ",(0,s.jsx)(e.code,{children:"showToast"})," to present this component because it's linked to navigation."]})}),"\n",(0,s.jsx)(e.p,{children:"Represents a simple toast overlay which animatedly appears for 3 seconds with presented text and the animatedly disappears."}),"\n",(0,s.jsx)(e.h2,{id:"params",children:"Params"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Required"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Default value"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"string"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"True"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Text which will be shown"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"textStyle"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"TextStyle"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Style of text"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"icon"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"ImageURISource"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Icon which will be shown on the lft side from message"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"iconStyle"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"ImageStyle"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Icon style"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"loading"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"boolean"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Undefined"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Shows activity indicator"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"location"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.code,{children:"bottom or top"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"False"}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.code,{children:"top"})," on iOS, ",(0,s.jsx)(e.code,{children:"bottom"})," on Android"]}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Location of toast"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",metastring:"jsx",children:'  const showTopToast = useCallback(() => {\n    showToast({\n        text: "Toast message text",\n        location: "top",\n    });\n}, []);\n\nconst showBottomToast = useCallback(() => {\n    showToast({\n        text: "Toast message text",\n        location: "bottom",\n    });\n}, []);\n\nconst showBottomToastLoading = useCallback(() => {\n    showToast({\n        text: "Loading message",\n        location: "bottom",\n        loading: true,\n    });\n}, []);\n\nconst showBottomToastIcon = useCallback(() => {\n    showToast({\n        text: "Message with icon",\n        location: "bottom",\n        icon: ImageResources.camera,\n        iconStyle: {tintColor: Colors.red},\n    });\n}, []);\n\nreturn (\n    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>\n        <PrimaryButton type={ButtonType.solid} label={"Show top toast"} onPress={showTopToast} />\n        <PrimaryButton type={ButtonType.solid} label={"Show bottom toast"} onPress={showBottomToast} />\n        <PrimaryButton type={ButtonType.solid} label={"Show loading"} onPress={showBottomToastLoading} />\n        <PrimaryButton type={ButtonType.solid} label={"Show icon"} onPress={showBottomToastIcon} />\n    </ScrollView>\n);\n'})})]})}function x(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>r});var s=n(6540);const l={},o=s.createContext(l);function i(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:i(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);