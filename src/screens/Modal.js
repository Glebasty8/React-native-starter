import React from "react";
import {Button, Text, View} from "react-native";

class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Welcome')}
                    title="Dismiss"
                />
            </View>
        );
    }
}

export default ModalScreen;
