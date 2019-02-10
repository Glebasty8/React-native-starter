import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome screen</Text>
            <Button title="Login" onPress={() => props.navigation.navigate('Dashboard')} />
            <Button title="Sign up" onPress={() => alert('Sign up')} />
            <Button title="Modal" onPress={() => props.navigation.navigate('Modal')} />

        </View>
    );
};

export default WelcomeScreen;
