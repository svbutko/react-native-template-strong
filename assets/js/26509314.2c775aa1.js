"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7251],{3015:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var o=r(4848),i=r(8453);const t={title:"Troubleshooting"},s="Troubleshooting",l={type:"mdx",permalink:"/react-native-template-strong/troubleshooting",source:"@site/src/pages/troubleshooting.md",title:"Troubleshooting",description:"npm ERR! Could not resolve dependency",frontMatter:{title:"Troubleshooting"},unlisted:!1},a={},d=[{value:"npm ERR! Could not resolve dependency",id:"npm-err-could-not-resolve-dependency",level:2},{value:"Error: Command failed: yarn install",id:"error-command-failed-yarn-install",level:2},{value:"ESLint: Error: Cannot read config file: .../.eslintrc.js",id:"eslint-error-cannot-read-config-file-eslintrcjs",level:2},{value:"npm ERR! command failed npm ERR! command sh -c husky install",id:"npm-err-command-failed-npm-err-command-sh--c-husky-install",level:2},{value:"nvm is not compatible with the &quot;PREFIX&quot; variable: currently set to &quot;/usr/local&quot;",id:"nvm-is-not-compatible-with-the-prefix-variable-currently-set-to-usrlocal",level:2},{value:"Android Gradle plugin requires Java 11 to run. You are currently using Java 1.8",id:"android-gradle-plugin-requires-java-11-to-run-you-are-currently-using-java-18",level:2},{value:"Can&#39;t find your issue?",id:"cant-find-your-issue",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.h2,{id:"npm-err-could-not-resolve-dependency",children:"npm ERR! Could not resolve dependency"}),"\n",(0,o.jsxs)(n.p,{children:["Some dependencies might have incorrect peer versions of other dependencies and NPM throws the error, in order to ignore it run\n",(0,o.jsx)(n.code,{children:"npm install --force"})]}),"\n",(0,o.jsx)(n.h2,{id:"error-command-failed-yarn-install",children:"Error: Command failed: yarn install"}),"\n",(0,o.jsxs)(n.p,{children:["The project uses ",(0,o.jsx)(n.code,{children:"npm"})," as package manager, and you're trying to use ",(0,o.jsx)(n.code,{children:"Yarn"}),",\nIt is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files.\nSimply run ",(0,o.jsx)(n.code,{children:"npm install"})," and use ",(0,o.jsx)(n.code,{children:"npm"})," version >= 6.14.13."]}),"\n",(0,o.jsx)(n.h2,{id:"eslint-error-cannot-read-config-file-eslintrcjs",children:"ESLint: Error: Cannot read config file: .../.eslintrc.js"}),"\n",(0,o.jsxs)(n.p,{children:["Try to update ",(0,o.jsx)(n.code,{children:"ESLint"})," and ",(0,o.jsx)(n.code,{children:"npm"})," versions"]}),"\n",(0,o.jsx)(n.h2,{id:"npm-err-command-failed-npm-err-command-sh--c-husky-install",children:"npm ERR! command failed npm ERR! command sh -c husky install"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/typicode/husky",children:"Husky"})," tries to initialize itself using ",(0,o.jsx)(n.code,{children:"prepare"})," script from ",(0,o.jsx)(n.code,{children:"package.json"}),"\nand to do so it needs to have a git repository, check how to work with Husky or remove ",(0,o.jsx)(n.code,{children:"prepare"})," script if you're not going to use it\n(not recommended)"]}),"\n",(0,o.jsx)(n.h2,{id:"nvm-is-not-compatible-with-the-prefix-variable-currently-set-to-usrlocal",children:'nvm is not compatible with the "PREFIX" variable: currently set to "/usr/local"'}),"\n",(0,o.jsxs)(n.p,{children:["If you have ",(0,o.jsx)(n.code,{children:"NVM"})," installed then there's a minor conflict which can be solved next way:\n",(0,o.jsx)(n.code,{children:"nvm unalias default"})]}),"\n",(0,o.jsx)(n.h2,{id:"android-gradle-plugin-requires-java-11-to-run-you-are-currently-using-java-18",children:"Android Gradle plugin requires Java 11 to run. You are currently using Java 1.8"}),"\n",(0,o.jsx)(n.p,{children:"Update your JDK version, run following command in terminal"}),"\n",(0,o.jsxs)(n.p,{children:["On macOS:\n",(0,o.jsx)(n.code,{children:"brew install --cask adoptopenjdk/openjdk/adoptopenjdk11"})]}),"\n",(0,o.jsxs)(n.p,{children:["On Windows:\n",(0,o.jsx)(n.code,{children:"choco install -y nodejs.install openjdk11"})]}),"\n",(0,o.jsx)(n.h2,{id:"cant-find-your-issue",children:"Can't find your issue?"}),"\n",(0,o.jsxs)(n.p,{children:["Can't find an answer to your issue? Feel free to ",(0,o.jsx)(n.a,{href:"https://github.com/svbutko/react-native-template-strong/issues/new/choose",children:"create an issue"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(6540);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);