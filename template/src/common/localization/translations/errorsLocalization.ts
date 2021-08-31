export const errorsLocalization = {
  en: {
    listErrorTitle: "Failed to load data.",
    tryAgain: "Try again.",
    thisFieldIsRequired: "This field is required.",
    unknownErrorHasOccurred: "An unknown error has occurred.",
    failedToOpenUrl: "Failed to open URL. Check that the app is installed.",
    pleaseCheckYourInternetConnection: "Please check your Internet connection.",
    invalidEmail: "Invalid Email",
    invalidPhoneNumber: "Invalid phone number",
    invalidFullName: "Invalid full name",
    invalidFromDate: (fromField: string, toField: string) => `${fromField} can't be later than ${toField.toLowerCase()}`,
    invalidToDate: (fromField: string, toField: string) => `${toField} can't be earlier than ${fromField.toLowerCase()}`,
    datesCantBeEqual: (fromField: string, toField: string) => `${fromField} and ${toField.toLowerCase()} can't be equal`,
    mobileDataIsTurnedOff: "Mobile Data is Turned Off",
    turnOnMobileData: "Turn on mobile data or use Wi-Fi to access data.",
    error: "Error",
  },
};
