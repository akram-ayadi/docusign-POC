import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginBottom: 100
    },
    container: { flex: 1 },
    webView: { flex: 1 }
});

const DOCUSIGN_URL = "https://demo.docusign.net/Signing/MTRedeem/v1/2fd73066-c15b-4f3d-8881-71c16345d792?slt=eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQYAAAABAAMABwAAGlUACYPdSAgAALpmhyqD3UgYAAEAAAAAAAAAIQDrAgAAeyJUb2tlbklkIjoiYzMyZjkwZDAtOGYyMy00MzZhLWFlNTctN2Q1MDgxZGRkZjAxIiwiRXhwaXJhdGlvbiI6IjIwMjUtMDQtMjRUMDg6MjY6MjQrMDA6MDAiLCJJc3N1ZWRBdCI6IjIwMjUtMDQtMjRUMDg6MjE6MjQuNzc5OTcyKzAwOjAwIiwiUmVzb3VyY2VJZCI6ImYyY2YwNjVlLTkyY2EtNGZhZS04NmQxLTcwMzA1NWI5MTA0ZiIsIlJlc291cmNlcyI6IntcIkVudmVsb3BlSWRcIjpcImYyY2YwNjVlLTkyY2EtNGZhZS04NmQxLTcwMzA1NWI5MTA0ZlwiLFwiQWN0b3JVc2VySWRcIjpcImUzYTAyOTJlLWYzZjEtNGZmOS1iMDY1LWQ0ZTJhM2VhZjNmYlwiLFwiUmVjaXBpZW50SWRcIjpcIjE4MjYzZmEzLWU2ZjUtNDQxNy1iYzU2LWMyMTBiYWI3YzFmZVwiLFwiRmFrZVF1ZXJ5U3RyaW5nXCI6XCJ0PTJlYjc0ZmY3LTg2NzUtNGJkYy05MTMzLTFlYmYxMWI4NzhhNVwiLFwiSW50ZWdyYXRvcktleVwiOlwiZTc3ZDdjYWYtZmU1ZC00NmU0LThiZDMtMzFlZDk2YmMxZTJhXCIsXCJDcmVhdGVkQXRcIjpcIjIwMjUtMDQtMjRUMDg6MjE6MjQuNzYxMTA3M1pcIn0iLCJUb2tlblR5cGUiOjEsIkF1ZGllbmNlIjoiMjVlMDkzOTgtMDM0NC00OTBjLThlNTMtM2FiMmNhNTYyN2JmIiwiUmVkaXJlY3RVcmkiOiJodHRwczovL2RlbW8uZG9jdXNpZ24ubmV0L1NpZ25pbmcvU3RhcnRJblNlc3Npb24uYXNweCIsIkhhc2hBbGdvcml0aG0iOjAsIkhhc2hSb3VuZHMiOjAsIlRva2VuU3RhdHVzIjowLCJJc1NpbmdsZVVzZSI6ZmFsc2V9PwCA4YyyCYPdSA.1dZjLrvRsMUtQeLC9-2ntckv2StHI0zv939ywxBsFTN5Wsdt4_gMKBBkoSUGJO0J4kr7GBst1dPwzjEluNEM_sYX5LbKHKG8Sv3n3k4fIhYRIz06yyH-bgzskpSIG5C2mSyEZ3gFSQ2smvxKQKnjhTThf4sOZCbAUdhvKlFwqngKylArMFXEZeXyXA9ZXLeGCh-efGtIksp2-wa-g0KGmmV2FxI_oj1V0L0Hb7eyrpgbHj38FvvhTMTj7TBRBDf2Ov9gWt48FwGqpgEhGK8XoOUgJwopmptVpMos5DarDaPBqgYLQVVu8r36EoJArba-luX1Wi02KSw1n-XWqaAxQg";

export default function TabTwoScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <WebView
                    source={{ uri: DOCUSIGN_URL }}
                    style={styles.webView}
                />
            </View>
        </SafeAreaView>
    );
}
