import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail</Text>
            <Button title="Go back" onPress={() => navigation.goBack(null)} />
        </View>
    );
}

export default DetailScreen;
