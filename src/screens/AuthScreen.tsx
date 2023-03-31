import { Appbar } from "react-native-paper";
import AuthProvider from "../providers/AuthProvider";

/**
 * Authorization Screen
 */
export default function AuthScreen() {
    return (
        <AuthProvider>
            <_AuthScreen />
        </AuthProvider>
    )
}

/**
 * Authorization Screen implimentation
 */
function _AuthScreen() {
    return (
        <>
            {/* screen title bar */}
            <_TitleBar />
            <_TitleBar />
        </>
    );
}

function _TitleBar() {
    return (
        <Appbar.Header >
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title="Auth" />
            <Appbar.Action icon="calendar" onPress={() => { }} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>
    );
}