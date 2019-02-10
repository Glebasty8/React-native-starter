import React from 'react';
import { SafeAreaView } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import AppNavigator from './navigators';

import configureStore from './store';

const { store, persistor } = configureStore();

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                        <AppNavigator />
                </PersistGate>
            </Provider>
        );
    }
}

export default Root;
