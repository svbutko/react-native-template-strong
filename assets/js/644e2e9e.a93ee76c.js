"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6759],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},858:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:13,title:"Validations"},s=void 0,c={unversionedId:"validations",id:"validations",isDocsHomePage:!1,title:"Validations",description:"Content",source:"@site/docs/validations.md",sourceDirName:".",slug:"/validations",permalink:"/react-native-template-strong/docs/validations",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/validations.md",tags:[],version:"current",lastUpdatedAt:1634026274,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Validations"},sidebar:"tutorialSidebar",previous:{title:"shareHelpers",permalink:"/react-native-template-strong/docs/helpers/share-helpers"},next:{title:"newState",permalink:"/react-native-template-strong/docs/utils/new-state"}},u=[{value:"Content",id:"content",children:[],level:2},{value:"Validations",id:"validations",children:[{value:"emptyValidation",id:"emptyvalidation",children:[],level:3},{value:"datesValidation",id:"datesvalidation",children:[],level:3},{value:"phoneValidations",id:"phonevalidations",children:[],level:3},{value:"emailValidations",id:"emailvalidations",children:[],level:3},{value:"fullNameValidations",id:"fullnamevalidations",children:[],level:3}],level:2},{value:"Validation constants",id:"validation-constants",children:[],level:2},{value:"Hooks",id:"hooks",children:[{value:"useInputError",id:"useinputerror",children:[],level:3}],level:2},{value:"Async thunk error handling",id:"async-thunk-error-handling",children:[{value:"handlePromiseResult",id:"handlepromiseresult",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"content"},"Content"),(0,i.kt)("p",null,"Primarily has validations for different use cases (e.g. min. password length, max. name characters etc.)."),(0,i.kt)("p",null,"Many of those validations can be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryTextInput")," to show errors while user types, when user finished typing (left input) or when user taps on a certain button."),(0,i.kt)("p",null,"These validations are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/common/validations")," folder."),(0,i.kt)("h2",{id:"validations"},"Validations"),(0,i.kt)("p",null,"These validations operate with ",(0,i.kt)("inlineCode",{parentName:"p"},"null | string")," return type rather than throwing an error. So when a method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," then a value passed, otherwise it returns localized ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," which can be shown to user as error."),(0,i.kt)("h3",{id:"emptyvalidation"},"emptyValidation"),(0,i.kt)("p",null,"Checks whether a string is empty (returns localization string) or not (returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("h3",{id:"datesvalidation"},"datesValidation"),(0,i.kt)("p",null,"Compares two dates between each other.\nIf dates are equal then returns localization string (dates can't be equal).\nThen based on which field is currently being filled checks the difference:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")," can't be later than ",(0,i.kt)("inlineCode",{parentName:"li"},"to")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to")," can't be earlier than ",(0,i.kt)("inlineCode",{parentName:"li"},"from"))),(0,i.kt)("h3",{id:"phonevalidations"},"phoneValidations"),(0,i.kt)("p",null,"Checks whether a string is empty or not and checks minimal length of phone number."),(0,i.kt)("h3",{id:"emailvalidations"},"emailValidations"),(0,i.kt)("p",null,"Checks whether a string is empty or not and checks the format of email by using ",(0,i.kt)("inlineCode",{parentName:"p"},"isEmail"),"."),(0,i.kt)("h3",{id:"fullnamevalidations"},"fullNameValidations"),(0,i.kt)("p",null,"Checks whether a string is empty or not and checks minimal length of full name."),(0,i.kt)("h2",{id:"validation-constants"},"Validation constants"),(0,i.kt)("p",null,"These constants can be used as min/max length props in text inputs or when checking certain values.\nThey are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"validationConstants.ts")," and have some common values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const validationConstants = {\n  phone: {\n    minLength: 8,\n    maxLength: 18,\n  },\n  fullName: {\n    minLength: 3,\n    maxLength: 64,\n  },\n  comment: {\n    maxLength: 280,\n  },\n  email: {\n    maxLength: 254,\n  },\n  licensePlate: {\n    minLength: 4,\n    maxLength: 10,\n  },\n};\n")),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("p",null,"There are a couple of hooks to use for error checking when user does certain actions. So rather than using 3rd party form dependency\n(forms are rare use case and for most of the time can be checked manually in React Native) it's more convenient to use this custom hooks"),(0,i.kt)("h3",{id:"useinputerror"},"useInputError"),(0,i.kt)("p",null,"Checks string value which user inputs based on supplied validation and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setError"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"recheck"),"."),(0,i.kt)("p",null,"Used in conjunction with ",(0,i.kt)("inlineCode",{parentName:"p"},"recheckAllValidations"),"."),(0,i.kt)("p",null,"To better demonstrate how it works, it's better to show a basic example with ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," text inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'export const AuthPersonalData: NavigationFunctionComponent = () => {\n    const dispatch = useAppDispatch();\n\n    const [fullName, setFullName] = useState<string>("");\n    const [email, setEmail] = useState<string>("");\n\n    const {error: emailError, recheckValue: recheckEmail} = useInputError(email, emailValidations);\n    const {error: nameError, recheckValue: recheckName} = useInputError(fullName, fullNameValidations);\n    \n    const submitData = useCallback(() => {\n        if (recheckAllValidations([recheckName, recheckEmail])) {\n            dispatch(createProfile({email, name: fullName.trim()}));\n        }\n    }, [recheckName, recheckEmail, dispatch, email, fullName]);\n\n    return (\n        <SafeAreaView onTouchStart={Keyboard.dismiss} style={CommonStyles.flexWhiteBackground}>\n            <PrimaryTextInput\n                label={localization.common.fullName}\n                value={fullName}\n                onChangeText={setFullName}\n                autoCompleteType={"name"}\n                enablesReturnKeyAutomatically={true}\n                returnKeyType={"next"}\n                textContentType={"name"}\n                maxLength={validationConstants.fullName.maxLength}\n                error={nameError}\n            />\n            <PrimaryTextInput\n                label={localization.common.email}\n                value={email}\n                onChangeText={setEmail}\n                autoCompleteType={"email"}\n                enablesReturnKeyAutomatically={true}\n                returnKeyType={"done"}\n                textContentType={"emailAddress"}\n                autoCapitalize={"none"}\n                blurOnSubmit={true}\n                keyboardType={"email-address"}\n                onSubmitEditing={submitData}\n                maxLength={validationConstants.email.maxLength}\n                error={emailError}\n            />\n            <PrimaryButton\n                type={ButtonType.solid}\n                label={localization.common.addData}\n                onPress={submitData}\n            />\n        </SafeAreaView>\n    );\n};\n')),(0,i.kt)("p",null,"You can see two simple inputs and a button. While user enters certain value he will be seeing an error if it won't fit to validation."),(0,i.kt)("p",null,"And before dispatching profile creation, we might recheck all validations which we had if at least one of them fails the dispatch won't happen and errors will be set."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setError")," parameter which is returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"useInputError")," can be used in cases when we need to manually set error, for example when API returned error regarding this value (e.g. email is already taken)."),(0,i.kt)("h2",{id:"async-thunk-error-handling"},"Async thunk error handling"),(0,i.kt)("p",null,"To check on async thunk errors and show a success message or show error as alert, toast or input's error prop there's a mechanism for it."),(0,i.kt)("h3",{id:"handlepromiseresult"},"handlePromiseResult"),(0,i.kt)("p",null,"Unwraps the result of promise and then if everything went without errors based on provided params shows success toast and executes success message."),(0,i.kt)("p",null,"If things went the wrong way it tries to process the error using ",(0,i.kt)("inlineCode",{parentName:"p"},"handleErrorPostProcessing"),"."),(0,i.kt)("p",null,"To better demonstrate how it works we come back to our example with ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," but this time we will modify it show error and success message if everything went right."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"    const processError = useCallback((newError: Error) => {\n        return {message: newError.message, visualRepresentation: ErrorRepresentationType.toast}\n    }, []);\n\n    const submitData = useCallback(() => {\n    if (recheckAllValidations([recheckName, recheckEmail])) {\n        handlePromiseResult(\n            dispatch(createProfile({email, name: fullName.trim()}))\n            localization.auth.profileHasBeenSuccessfullyCreated,\n            setAuthorizedRoot,\n            processError\n        );\n    }\n    }, [recheckName, recheckEmail, dispatch, email, fullName]);\n")),(0,i.kt)("p",null,"So now if everything goes right user will see a toast with ",(0,i.kt)("inlineCode",{parentName:"p"},"localization.auth.profileHasBeenSuccessfullyCreated")," and will be redirected to new root (",(0,i.kt)("inlineCode",{parentName:"p"},"setAuthorizedRoot"),").\nIf things go wrong way there will be shown a toast with error message from server."),(0,i.kt)("p",null,"To better understand logic take a brief look at insides of ",(0,i.kt)("inlineCode",{parentName:"p"},"handlePromiseResult")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"handleErrorPostProcessing")," they are simple but just need to be used once or twice to grasp how and why they do this."))}p.isMDXComponent=!0}}]);