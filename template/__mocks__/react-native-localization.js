import LocalizedStringsCore from "react-localization";

function getInterfaceLanguage() {
  return "en";
}

export default class LocalizedStrings extends LocalizedStringsCore {
  constructor(props) {
    super(props, getInterfaceLanguage);
  }
}
