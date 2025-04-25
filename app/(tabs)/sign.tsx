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

const DOCUSIGN_URL = "https://demo.docusign.net/Signing/MTRedeem/v1/099dc1a5-0c1d-465f-845b-41ee6380b263?slt=eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQYAAAABAAMABwAALOtpzoPdSAgAAMz88O-D3UgYAAEAAAAAAAAAIQDsAgAAeyJUb2tlbklkIjoiYzMyZjkwZDAtOGYyMy00MzZhLWFlNTctN2Q1MDgxZGRkZjAxIiwiRXhwaXJhdGlvbiI6IjIwMjUtMDQtMjVUMDc6NTk6MzIrMDA6MDAiLCJJc3N1ZWRBdCI6IjIwMjUtMDQtMjVUMDc6NTQ6MzIuNTgzMTE5NyswMDowMCIsIlJlc291cmNlSWQiOiJlNDBkMWY4OS00MTVkLTQ3NzEtYWJlYi00NmZjMzM4YjhhMjQiLCJSZXNvdXJjZXMiOiJ7XCJFbnZlbG9wZUlkXCI6XCJlNDBkMWY4OS00MTVkLTQ3NzEtYWJlYi00NmZjMzM4YjhhMjRcIixcIkFjdG9yVXNlcklkXCI6XCJlM2EwMjkyZS1mM2YxLTRmZjktYjA2NS1kNGUyYTNlYWYzZmJcIixcIlJlY2lwaWVudElkXCI6XCI5NDdmNjZjOS00ZDRhLTRhMDItOWRmOS0yMGMzM2I2YjgxNjJcIixcIkZha2VRdWVyeVN0cmluZ1wiOlwidD0zYTkyYTA1My05MTBiLTRhOTUtYmY4NS04MzAzZmU1NjVjYWRcIixcIkludGVncmF0b3JLZXlcIjpcImU3N2Q3Y2FmLWZlNWQtNDZlNC04YmQzLTMxZWQ5NmJjMWUyYVwiLFwiQ3JlYXRlZEF0XCI6XCIyMDI1LTA0LTI1VDA3OjU0OjMyLjU1Mzk1ODFaXCJ9IiwiVG9rZW5UeXBlIjoxLCJBdWRpZW5jZSI6IjI1ZTA5Mzk4LTAzNDQtNDkwYy04ZTUzLTNhYjJjYTU2MjdiZiIsIlJlZGlyZWN0VXJpIjoiaHR0cHM6Ly9kZW1vLmRvY3VzaWduLm5ldC9TaWduaW5nL1N0YXJ0SW5TZXNzaW9uLmFzcHgiLCJIYXNoQWxnb3JpdGhtIjowLCJIYXNoUm91bmRzIjowLCJUb2tlblN0YXR1cyI6MCwiSXNTaW5nbGVVc2UiOmZhbHNlfT8AgPMiHM-D3Ug.2nAlKA10S0k6jLafB-1I45czaqeBuwsc2Q6NW8Xh06wgNt_xTWfBkUF0FZZf6lQZhwJqpgBGqLjv92R1ofG9L3s3WvZDUNQgPFEKCzPzZPlGbcgjxE7BqeIk6U9k2isHD3J_0XeQoOeCDL31ksmMhG0N3FR2aBnK6PizjMyOrAuo9ixEdevqHCW1UbDYL1B3aitxwWC75D4rlV3TCE1BzBZSekQfZJBj-2qSFMM_Zp-uEeXyMzrGljHX5LwB2tjXfnsuM_31PyWfeVPSo7SE_Q63YGbaGzWLLhxQ7HZE2YzJbDsWPSzuowRIMCpHKuR_ziA56b7JiJt0gvSkwGGZ3g";

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
