import React from 'react';
import { View, Text, Button } from 'react-native';

const FeedScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Feed screen</Text>
            <Button title="Go to Details screen" onPress={() => navigation.navigate('Detail')} />
        </View>
    );
};

export default FeedScreen;
