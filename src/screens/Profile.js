import React from 'react';
import { WebView } from "react-native-webview";

const ProfileScreen = () => {
    return (
        <WebView
            source={{ uri: "https://finx:hamburg2019@test.finexity.com" }}
            style={{ marginTop: 20 }}
            originWhitelist={['*']}
        />
    );
};

export default ProfileScreen;
