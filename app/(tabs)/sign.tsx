import React, {useEffect, useState} from "react";
import {SafeAreaView, View, StyleSheet, ActivityIndicator} from "react-native";
import { WebView } from "react-native-webview";
import { getEmbeddedSigningUrl } from "@/app/utils";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginBottom: 100
    },
    container: { flex: 1 },
    webView: { flex: 1 },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});


export default async function TabTwoScreen() {
    const [docusignUrl, setDocusignUrl] = useState<string>("");

    useEffect(() => {
        const fetchEmbeddedSigningUrl = async () => {
            const url = await getEmbeddedSigningUrl();
            setDocusignUrl(url || "");
        };

        fetchEmbeddedSigningUrl();
    }, []);

    if (!docusignUrl) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.loading}>
                    <ActivityIndicator size="large" />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <WebView
                    source={{ uri: docusignUrl }}
                    style={styles.webView}
                />
            </View>
        </SafeAreaView>
    );
}
