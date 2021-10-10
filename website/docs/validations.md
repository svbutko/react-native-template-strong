---
sidebar_position: 13
title: Validations
---
## Content

Primarily has validations for different use cases (e.g. min. password length, max. name characters etc.).

Many of those validations can be used with `PrimaryTextInput` to show errors while user types, when user finished typing (left input) or when user taps on a certain button.

These validations are located in the `src/common/validations` folder.

## Validations

These validations operate with `null | string` return type rather than throwing an error. So when a method returns `null` then a value passed, otherwise it returns localized `string` which can be shown to user as error.

### emptyValidation
Checks whether a string is empty (returns localization string) or not (returns `null`).

### datesValidation
Compares two dates between each other. 
If dates are equal then returns localization string (dates can't be equal).
Then based on which field is currently being filled checks the difference:
- `from` can't be later than `to`
- `to` can't be earlier than `from`

### phoneValidations
Checks whether a string is empty or not and checks minimal length of phone number.

### emailValidations
Checks whether a string is empty or not and checks the format of email by using `isEmail`.

### fullNameValidations
Checks whether a string is empty or not and checks minimal length of full name.

## Validation constants
These constants can be used as min/max length props in text inputs or when checking certain values.
They are located in `validationConstants.ts` and have some common values:

```typescript
export const validationConstants = {
  phone: {
    minLength: 8,
    maxLength: 18,
  },
  fullName: {
    minLength: 3,
    maxLength: 64,
  },
  comment: {
    maxLength: 280,
  },
  email: {
    maxLength: 254,
  },
  licensePlate: {
    minLength: 4,
    maxLength: 10,
  },
};
```

## Hooks
There are a couple of hooks to use for error checking when user does certain actions. So rather than using 3rd party form dependency
(forms are rare use case and for most of the time can be checked manually in React Native) it's more convenient to use this custom hooks

### useInputError
Checks string value which user inputs based on supplied validation and returns `error`, `setError`, `recheck`.

Used in conjunction with `recheckAllValidations`.

To better demonstrate how it works, it's better to show a basic example with `email` and `name` text inputs:

```typescript jsx
export const AuthPersonalData: NavigationFunctionComponent = () => {
    const dispatch = useAppDispatch();

    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const {error: emailError, recheckValue: recheckEmail} = useInputError(email, emailValidations);
    const {error: nameError, recheckValue: recheckName} = useInputError(fullName, fullNameValidations);
    
    const submitData = useCallback(() => {
        if (recheckAllValidations([recheckName, recheckEmail])) {
            dispatch(createProfile({email, name: fullName.trim()}));
        }
    }, [recheckName, recheckEmail, dispatch, email, fullName]);

    return (
        <SafeAreaView onTouchStart={Keyboard.dismiss} style={CommonStyles.flexWhiteBackground}>
            <PrimaryTextInput
                label={localization.common.fullName}
                value={fullName}
                onChangeText={setFullName}
                autoCompleteType={"name"}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"next"}
                textContentType={"name"}
                maxLength={validationConstants.fullName.maxLength}
                error={nameError}
            />
            <PrimaryTextInput
                label={localization.common.email}
                value={email}
                onChangeText={setEmail}
                autoCompleteType={"email"}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                textContentType={"emailAddress"}
                autoCapitalize={"none"}
                blurOnSubmit={true}
                keyboardType={"email-address"}
                onSubmitEditing={submitData}
                maxLength={validationConstants.email.maxLength}
                error={emailError}
            />
            <PrimaryButton
                type={ButtonType.solid}
                label={localization.common.addData}
                onPress={submitData}
            />
        </SafeAreaView>
    );
};
```

You can see two simple inputs and a button. While user enters certain value he will be seeing an error if it won't fit to validation.

And before dispatching profile creation, we might recheck all validations which we had if at least one of them fails the dispatch won't happen and errors will be set.

`setError` parameter which is returned from `useInputError` can be used in cases when we need to manually set error, for example when API returned error regarding this value (e.g. email is already taken).

## Async thunk error handling

To check on async thunk errors and show a success message or show error as alert, toast or input's error prop there's a mechanism for it.

### handlePromiseResult
Unwraps the result of promise and then if everything went without errors based on provided params shows success toast and executes success message.

If things went the wrong way it tries to process the error using `handleErrorPostProcessing`.

To better demonstrate how it works we come back to our example with `email` and `name` but this time we will modify it show error and success message if everything went right.

```typescript jsx
    const processError = useCallback((newError: Error) => {
        return {message: newError.message, visualRepresentation: ErrorRepresentationType.toast}
    }, []);

    const submitData = useCallback(() => {
    if (recheckAllValidations([recheckName, recheckEmail])) {
        handlePromiseResult(
            dispatch(createProfile({email, name: fullName.trim()}))
            localization.auth.profileHasBeenSuccessfullyCreated,
            setAuthorizedRoot,
            processError
        );
    }
    }, [recheckName, recheckEmail, dispatch, email, fullName]);
```

So now if everything goes right user will see a toast with `localization.auth.profileHasBeenSuccessfullyCreated` and will be redirected to new root (`setAuthorizedRoot`).
If things go wrong way there will be shown a toast with error message from server.

To better understand logic take a brief look at insides of `handlePromiseResult` and `handleErrorPostProcessing` they are simple but just need to be used once or twice to grasp how and why they do this.


