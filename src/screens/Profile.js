import React from 'react';
import { WebView } from "react-native-webview";

const ProfileScreen = () => {
    return (
        <WebView
            source={{ uri: "https://github.com/facebook/react-native" }}
            style={{ marginTop: 20 }}
            originWhitelist={['*']}
        />
    );
};

export default ProfileScreen;
