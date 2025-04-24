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

const DOCUSIGN_URL = "https://demo.docusign.net/Signing/MTRedeem/v1/3cca43be-ebbd-4f0f-be26-2691b0671f4f?slt=eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQYAAAABAAMABwAA9YbzDYPdSAgAAJWYei-D3UgYAAEAAAAAAAAAIQDsAgAAeyJUb2tlbklkIjoiYzMyZjkwZDAtOGYyMy00MzZhLWFlNTctN2Q1MDgxZGRkZjAxIiwiRXhwaXJhdGlvbiI6IjIwMjUtMDQtMjRUMDk6MDE6NTArMDA6MDAiLCJJc3N1ZWRBdCI6IjIwMjUtMDQtMjRUMDg6NTY6NTAuMjQyMTY5NCswMDowMCIsIlJlc291cmNlSWQiOiI1OGZhZmUwMS1kNWQ4LTQ3NDItOWMyYi0yMDhmZjNjNDhlYTkiLCJSZXNvdXJjZXMiOiJ7XCJFbnZlbG9wZUlkXCI6XCI1OGZhZmUwMS1kNWQ4LTQ3NDItOWMyYi0yMDhmZjNjNDhlYTlcIixcIkFjdG9yVXNlcklkXCI6XCJlM2EwMjkyZS1mM2YxLTRmZjktYjA2NS1kNGUyYTNlYWYzZmJcIixcIlJlY2lwaWVudElkXCI6XCIzMzdjOWQ0NS05ZDljLTQ3MzctYmY0ZC05NWI5N2VjYzVmYmZcIixcIkZha2VRdWVyeVN0cmluZ1wiOlwidD1mODFlYThlZS0zOGY5LTRhODYtOGUyMC03NDVlN2Y5N2Y3YmJcIixcIkludGVncmF0b3JLZXlcIjpcImU3N2Q3Y2FmLWZlNWQtNDZlNC04YmQzLTMxZWQ5NmJjMWUyYVwiLFwiQ3JlYXRlZEF0XCI6XCIyMDI1LTA0LTI0VDA4OjU2OjUwLjIyNjM0NzdaXCJ9IiwiVG9rZW5UeXBlIjoxLCJBdWRpZW5jZSI6IjI1ZTA5Mzk4LTAzNDQtNDkwYy04ZTUzLTNhYjJjYTU2MjdiZiIsIlJlZGlyZWN0VXJpIjoiaHR0cHM6Ly9kZW1vLmRvY3VzaWduLm5ldC9TaWduaW5nL1N0YXJ0SW5TZXNzaW9uLmFzcHgiLCJIYXNoQWxnb3JpdGhtIjowLCJIYXNoUm91bmRzIjowLCJUb2tlblN0YXR1cyI6MCwiSXNTaW5nbGVVc2UiOmZhbHNlfT8AgLy-pQ6D3Ug.bHcJE0yw4jgihC6IwDOqAj58tQoxPl0Sar50A1Z-uzmbFkH2FNFj4kftH6SDrn9587K8zNSsxZtDB1OTVuctLiW0ra9q0VGVnd8AqKf-mPGExyxSlfA_zb6jxYt96ErO3xyefYdsx3rqcofagUfhKP9syMRcIInJcqRl9UAu-chQ-ornFOV9ud5hv5jaTww-6SakdFKnMexndDLuoU1vDVudc1hA5MX3uF7zr5xZaD0yfaI-Cib0jIS5vN6RyHqUxS4w_TBZLXGAfcy6sl48G3SC7W05TDD0QY2RvIcO0jXXLDYRAeGSK0-fwl8C_WRlwmvKMkx-O5n5_9tznm8BpA";

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
