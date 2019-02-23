import React from "react";
import {Button, Text, View} from "react-native";
import { connect } from 'react-redux';
import PushNotifications from '../components/PushNotifications';

import { startLogin } from './../store/actions/auth';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Home',
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="#fff"
                />
            ),
        };
    };

    render() {
        return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Home Screen</Text>
                    <Button
                        title="Go to Details"
                        onPress={() => {
                            this.props.startLogin();
                            this.props.navigation.navigate('Details', {
                                itemId: 86,
                                otherParam: 'anything you want here',
                            })
                        }}
                    />
                    <PushNotifications />
                </View>
        );
    }
}

export default connect(null, { startLogin })(HomeScreen);
