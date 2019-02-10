import React, { Component } from 'react';
import { AppState } from 'react-native';
import styled from 'styled-components/native';

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
        AppState.addEventListener('change', this.handleAppStateChange)
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange = (AppState) => {
        if (AppState === 'background') {
            // TODO: Schedule background notifications
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
