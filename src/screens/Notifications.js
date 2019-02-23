import React, { Component } from 'react';
import { AppState, Platform } from 'react-native';
import styled from 'styled-components/native';
import PushNotification from 'react-native-push-notification';

import { normalize } from './../utils';

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;

const Welcome = styled.Text`
    fontSize: ${normalize(20)};
    margin: ${normalize(10)}px;
`;

const Picker = styled.Picker`
    width: ${normalize(100)};
`;

class NotificationsScreen extends Component {
    state = {
        seconds: 5,
    };

    componentDidMount() {
        let date = new Date(Date.now());

        if (Platform.OS === 'ios') {
            date = date.toISOString();
        }
        PushNotification.localNotificationSchedule({
            title: "My Notification Title",
            message: "My Notification Message",
            date,
        });
        AppState.addEventListener('change', this.handleAppStateChange)
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange = (AppState) => {
        if (AppState === 'background') {
            let date = new Date(Date.now() + (this.state.seconds * 1000));

            if (Platform.OS === 'ios') {
                date = date.toISOString();
            }
            PushNotification.localNotificationSchedule({
                title: "My Notification Title",
                message: "My Notification Message",
                date,
            });
            console.log('app is in background', this.state.seconds);
        }
    };

    render() {
        return (
            <Container>
                <Welcome>Choose your notification time in seconds</Welcome>
                <Picker
                    selectedValue={this.state.seconds}
                    onValueChange={(seconds) => this.setState({ seconds})}
                >
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="10" value={10} />
                    <Picker.Item label="15" value={15} />
                </Picker>
            </Container>
        );
    }
}

export default NotificationsScreen;
