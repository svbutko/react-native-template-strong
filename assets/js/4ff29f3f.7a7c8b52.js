"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3286],{1067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var l=n(5893),s=n(1151);const i={sidebar_position:15,title:"DatePickerOverlay"},r=void 0,a={id:"components/date-picker-overlay",title:"DatePickerOverlay",description:"Content",source:"@site/docs/components/date-picker-overlay.md",sourceDirName:"components",slug:"/components/date-picker-overlay",permalink:"/react-native-template-strong/docs/components/date-picker-overlay",draft:!1,unlisted:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/components/date-picker-overlay.md",tags:[],version:"current",lastUpdatedAt:1634026274,formattedLastUpdatedAt:"Oct 12, 2021",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"DatePickerOverlay"},sidebar:"tutorialSidebar",previous:{title:"ImageCropPickerButton",permalink:"/react-native-template-strong/docs/components/image-crop-picker-button"},next:{title:"ToastOverlay",permalink:"/react-native-template-strong/docs/components/toast-overlay"}},d={},o=[{value:"Content",id:"content",level:2},{value:"Params",id:"params",level:2},{value:"Usage example",id:"usage-example",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,l.jsx)(t.admonition,{title:"Do not use this component directly!",type:"danger",children:(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"showDatePicker"})," to present this component because it's linked to navigation."]})}),"\n",(0,l.jsxs)(t.p,{children:["Represents a date picker provided by ",(0,l.jsx)(t.a,{href:"https://github.com/react-native-datetimepicker/datetimepicker",children:"@react-native-community/datetimepicker"})," as modal on iOS and as overlay on Android."]}),"\n",(0,l.jsx)(t.h2,{id:"params",children:"Params"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"value"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Date"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Current selected date value"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"minDate"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Date"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Minimum border of available dates for selection"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"maxDate"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Date"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Maximum border of available dates for selection"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"onDateChange"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"(date: Date) => void "})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Undefined"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Callback with selected date"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:'const [selectedDate, setSelectedDate] = useState<Date>(new Date());\n\nconst onPress = useCallback(() => {\n    return showDatePicker({\n        value: selectedDate,\n        onDateChange: setSelectedDate,\n    });\n}, [selectedDate, setSelectedDate]);\n\nreturn (\n    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>\n        <PrimaryButton type={ButtonType.solid} label={"Select date"} onPress={onPress} />\n        <DescriptionText>{dateFromFormat(selectedDate, DateFormat.yearDateTime)}</DescriptionText>\n    </ScrollView>\n);\n'})})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var l=n(7294);const s={},i=l.createContext(s);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);