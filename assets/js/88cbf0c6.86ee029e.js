"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6,title:"AsyncThunk"},i=void 0,s={unversionedId:"redux/async-thunk",id:"redux/async-thunk",title:"AsyncThunk",description:"Content",source:"@site/docs/redux/async-thunk.md",sourceDirName:"redux",slug:"/redux/async-thunk",permalink:"/react-native-template-strong/docs/redux/async-thunk",draft:!1,editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/redux/async-thunk.md",tags:[],version:"current",lastUpdatedAt:1633614778,formattedLastUpdatedAt:"Oct 7, 2021",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"AsyncThunk"},sidebar:"tutorialSidebar",previous:{title:"Slice",permalink:"/react-native-template-strong/docs/redux/slice"},next:{title:"Hooks",permalink:"/react-native-template-strong/docs/redux/hooks"}},l={},d=[{value:"Content",id:"content",level:2},{value:"Creation",id:"creation",level:2},{value:"Slice handlers",id:"slice-handlers",level:2},{value:"Promise result handlers",id:"promise-result-handlers",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"content"},"Content"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AsyncThunks")," as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"Slices")," are stored together for better readability and remove need to have additional imports."),(0,a.kt)("p",null,"To demonstrate how to create and use it, I will be using some ",(0,a.kt)("inlineCode",{parentName:"p"},"Orders")," state and ",(0,a.kt)("inlineCode",{parentName:"p"},"ordersApi")," as example."),(0,a.kt)("h2",{id:"creation"},"Creation"),(0,a.kt)("p",null,"Creation of ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncThunk")," is the same as in original documentation, with your API call do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export const takeOrder = createAsyncThunk("orders/take", async (id: string) => {\n  return await ordersApi.takeOrder(id);\n});\n')),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},'"orders/take""')," is name of your slice and name of your method."),(0,a.kt)("h2",{id:"slice-handlers"},"Slice handlers"),(0,a.kt)("p",null,"You can handle the result inline or as I like with functions, all together it looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export const takeOrder = createAsyncThunk("order/take", async (id: string) => {\n  return await ordersApi.takeOrder(id);\n});\n\nfunction rehydrate(state: OrderState, rehydrateParams: RehydrateAppAction) {\n  return newState(rehydrateParams.payload?.orders || state, {});\n}\n\nfunction orderActionPendingHandler(state: OrderState, params: ReturnType<typeof takeOrder.pending>) {\n  return newState(state, {isLoading: true, error: null});\n}\n\nfunction takeOrderFulfilledHandler(state: OrderState, params: ReturnType<typeof takeOrder.fulfilled>) {\n  return newState(state, {isLoading: false, error: null, order: params.payload});\n}\n\nfunction orderActionRejectedHandler(state: OrderState, params: ReturnType<typeof takeOrder.rejected>) {\n  return newState(state, {isLoading: false, error: params.error.message});\n}\n\nexport const {reducer: OrderReducer} = createSlice({\n  name: "order",\n  initialState: OrdersInitialState,\n  extraReducers: (builder) => {\n    builder\n      .addCase(REHYDRATE, rehydrate)\n      .addCase(takeOrder.pending, orderActionPendingHandler)\n      .addCase(takeOrder.fulfilled, takeOrderFulfilledHandler)\n      .addCase(takeOrder.rejected, orderActionRejectedHandler);\n  },\n});\n')),(0,a.kt)("h2",{id:"promise-result-handlers"},"Promise result handlers"),(0,a.kt)("p",null,"To handle promise results in pages/components (i.e. show error toast, show error in input, show success toast etc.)\nwe can handle it the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  const onTakeOrderPress = useCallback(() => {\n    handlePromiseResult(dispatch(takeOrder(orderId)), localization.common.orderHasBeenSuccessfullyTaken);\n  }, [dispatch, orderId]);\n")),(0,a.kt)("p",null,"To check more about ",(0,a.kt)("inlineCode",{parentName:"p"},"handlePromiseResult")," read more ",(0,a.kt)("a",{parentName:"p",href:"/react-native-template-strong/docs/validations"},"here"),"."))}p.isMDXComponent=!0}}]);