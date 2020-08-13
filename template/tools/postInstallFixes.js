const dir = __dirname;
const path = require("path");
const replaceInFile = require("./replaceInFile");

preventBundleInDebugForIOS();

function preventBundleInDebugForIOS() {
    console.log("Prevent bundling in debug on iOS");
    const file = path.join(dir, "..", "node_modules", "react-native", "scripts", "react-native-xcode.sh");

    replaceInFile(file, /"\$PLATFORM_NAME" == \*simulator/g, "\"\$PLATFORM_NAME\"")
}
