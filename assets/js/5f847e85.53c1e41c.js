"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4363],{9180:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(4848),n=t(8453);const a={sidebar_position:2,title:"Images"},i=void 0,o={id:"resources/images",title:"Images",description:"Before adding images",source:"@site/docs/resources/images.md",sourceDirName:"resources",slug:"/resources/images",permalink:"/react-native-template-strong/docs/resources/images",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/resources/images.md",tags:[],version:"current",lastUpdatedAt:1633518181e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Images"},sidebar:"tutorialSidebar",previous:{title:"Fonts",permalink:"/react-native-template-strong/docs/resources/fonts"},next:{title:"SF Symbols",permalink:"/react-native-template-strong/docs/resources/sf-symbols"}},c={},d=[{value:"Before adding images",id:"before-adding-images",level:2},{value:"Adding images",id:"adding-images",level:2},{value:"Accessing images",id:"accessing-images",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"before-adding-images",children:"Before adding images"}),"\n",(0,r.jsxs)(s.p,{children:["There are ",(0,r.jsx)(s.a,{href:"/react-native-template-strong/docs/resources/sf-symbols",children:"SF Symbols"})," and ",(0,r.jsx)(s.a,{href:"/react-native-template-strong/docs/resources/vector-icons",children:"Material Vector Icons"})," included in this project,\nmaybe will suit your needs better rather than adding more resources."]}),"\n",(0,r.jsx)(s.h2,{id:"adding-images",children:"Adding images"}),"\n",(0,r.jsxs)(s.p,{children:["To add images, simply put your images into ",(0,r.jsx)(s.code,{children:"/resources/images"})," folder (you can add sub-folders inside there)"]}),"\n",(0,r.jsxs)(s.p,{children:["And thanks to ",(0,r.jsx)(s.a,{href:"https://github.com/svbutko/react-native-image-resource-generator",children:"react-native-image-resource-generator"}),",\nrun the following script from your ",(0,r.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"npm run generate-image-resources\n"})}),"\n",(0,r.jsxs)(s.p,{children:["It will generate ",(0,r.jsx)(s.code,{children:"src/common/ImageResources.g.ts"}),", and also will fix some of your unacceptable names."]}),"\n",(0,r.jsx)(s.p,{children:"File content will look similar to this:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:'/* eslint-disable */\n/* tslint:disable */\nimport {ImageURISource} from "react-native";\n\n/**\n * This file is auto-generated by react-native-image-resource-generator\n * !!! DO NOT EDIT !!!\n * For more information check the documentation:\n * https://github.com/svbutko/react-native-image-resource-generator\n*/\n\nexport class ImageResources {\n  static readonly camera: ImageURISource = require("../../resources/images/camera.png");\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"accessing-images",children:"Accessing images"}),"\n",(0,r.jsx)(s.p,{children:"To access the images which you added, simply call them the next way:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"jsx",children:"<Image source={ImageResources.camera} style={styles.icon} />\n"})})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var r=t(6540);const n={},a=r.createContext(n);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);