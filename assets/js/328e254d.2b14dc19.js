"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2918],{6139:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=l(5893),n=l(1151);const o={sidebar_position:2,title:"colorHelpers"},s=void 0,i={id:"helpers/color-helpers",title:"colorHelpers",description:"Content",source:"@site/docs/helpers/color-helpers.md",sourceDirName:"helpers",slug:"/helpers/color-helpers",permalink:"/react-native-template-strong/docs/helpers/color-helpers",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/helpers/color-helpers.md",tags:[],version:"current",lastUpdatedAt:1633852672,formattedLastUpdatedAt:"Oct 10, 2021",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"colorHelpers"},sidebar:"tutorialSidebar",previous:{title:"calculatePage",permalink:"/react-native-template-strong/docs/helpers/calculate-page"},next:{title:"defaultKeyIdExtractor",permalink:"/react-native-template-strong/docs/helpers/default-key-id-extractor"}},d={},c=[{value:"Content",id:"content",level:2},{value:"platformNativeColor",id:"platformnativecolor",level:3},{value:"Params",id:"params",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"platformLocalColor",id:"platformlocalcolor",level:3},{value:"Params",id:"params-1",level:4},{value:"Usage example",id:"usage-example-1",level:4},{value:"platformMixedColor",id:"platformmixedcolor",level:3},{value:"Params",id:"params-2",level:4},{value:"Usage example",id:"usage-example-2",level:4}];function a(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,r.jsx)(t.p,{children:"Used to select color based on platform."}),"\n",(0,r.jsx)(t.h3,{id:"platformnativecolor",children:"platformNativeColor"}),"\n",(0,r.jsxs)(t.p,{children:["Selects color based on platform and if at least one is provided goes it through ",(0,r.jsx)(t.code,{children:"PlatformColor"})," otherwise returns ",(0,r.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"params",children:"Params"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"iosColor"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"PlatformColorsIOS"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["iOS color from ",(0,r.jsx)(t.code,{children:"PlatformColorsIOS"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"androidColor"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"PlatformColorsAndroid"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Android color from ",(0,r.jsx)(t.code,{children:"PlatformColorsAndroid"})]})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"usage-example",children:"Usage example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:"export const LoadingComponent = () => {\n    return (\n        <View style={CommonStyles.flexCenter}>\n            <ActivityIndicator color={platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.primary)}/>\n            <Text style={CommonStyles.normalText} numberOfLines={1}>\n                {localization.common.loading}\n            </Text>\n        </View>\n    );\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"platformlocalcolor",children:"platformLocalColor"}),"\n",(0,r.jsxs)(t.p,{children:["Selects color based on platform and if at least one is provided returns it otherwise returns ",(0,r.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"params-1",children:"Params"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"iosColor"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Colors"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["iOS color from ",(0,r.jsx)(t.code,{children:"Colors"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"androidColor"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Colors"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Android color from ",(0,r.jsx)(t.code,{children:"Colors"})]})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"usage-example-1",children:"Usage example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:"export const LoadingComponent = () => {\n    return (\n        <View style={CommonStyles.flexCenter}>\n            <ActivityIndicator color={platformLocalColor(Colors.red, Colors.green)} />\n            <Text style={CommonStyles.normalText} numberOfLines={1}>\n                {localization.common.loading}\n            </Text>\n        </View>\n    );\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"platformmixedcolor",children:"platformMixedColor"}),"\n",(0,r.jsxs)(t.p,{children:["Selects color based on platform and if at least one is provided returns it or goes it through ",(0,r.jsx)(t.code,{children:"PlatformColor"})," if it's type of ",(0,r.jsx)(t.code,{children:"PlatformColorsIOS"})," or ",(0,r.jsx)(t.code,{children:"PlatformColorsAndroid"})," otherwise returns ",(0,r.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"params-2",children:"Params"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"iosColor"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"Colors"}),", ",(0,r.jsx)(t.code,{children:"PlatformColorsIOS"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["iOS color from ",(0,r.jsx)(t.code,{children:"Colors"})," or ",(0,r.jsx)(t.code,{children:"PlatformColorsIOS"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"androidColor"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"Colors"}),", ",(0,r.jsx)(t.code,{children:"PlatformColorsAndroid"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Android color from ",(0,r.jsx)(t.code,{children:"Colors"})," or ",(0,r.jsx)(t.code,{children:"PlatformColorsAndroid"})]})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"usage-example-2",children:"Usage example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:"export const LoadingComponent = () => {\n    return (\n        <View style={CommonStyles.flexCenter}>\n            <ActivityIndicator color={platformMixedColor(Colors.red, PlatformColorsAndroid.primary)} />\n            <Text style={CommonStyles.normalText} numberOfLines={1}>\n                {localization.common.loading}\n            </Text>\n        </View>\n    );\n};\n"})})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>i,a:()=>s});var r=l(7294);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);