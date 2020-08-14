import {Platform, ViewStyle} from "react-native";
import {Colors} from "./colors";
import {styleSheetCreate} from "../../common/utils";

export const CommonStyles = styleSheetCreate({
    flex1: {
        flex: 1
    } as ViewStyle,
    flexWhiteBackground: {
        flex: 1,
        backgroundColor: Colors.white
    } as ViewStyle,
    flexBlackBackground: {
        flex: 1,
        backgroundColor: Colors.black
    } as ViewStyle,
    shadow: {
        ...Platform.select({
            ios: {
                shadowOffset: {height: 3, width: 0},
                shadowOpacity: 0.16,
                shadowRadius: 6,
            },
            android: {
                elevation: 4,
            }
        }),
    },
    shadow2: {
        ...Platform.select({
            ios: {
                shadowOffset: {height: 3, width: 0},
                shadowOpacity: 0.45,
                shadowRadius: 6,
            },
            android: {
                elevation: 4,
            }
        }),
    },
    bottomEmptySpace: {
        height: 50,
        backgroundColor: Colors.white
    } as ViewStyle,
    iPhoneXFooter: {
        height: 20
    } as ViewStyle,
    windowContainer: {
        position: "absolute",
        paddingLeft: 30,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 30,
        backgroundColor: Colors.white,
        left: 20,
        right: 20,
    } as ViewStyle,
    line: {
        borderBottomWidth: 1,
        borderColor: Colors.white,
    } as ViewStyle,
    rowCenter: {
        flexDirection: "row",
        alignItems: "center",
    } as ViewStyle,
});
