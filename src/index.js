// import React from "react";
// import { SafeAreaView } from "react-native";
// import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
// import {
//     createReduxContainer,
// } from 'react-navigation-redux-helpers';
//
// import RootStack from './navigators';
// import { compose, createStore, applyMiddleware } from 'redux';
// // import { AsyncStorage } from 'react-native';
// import createSagaMiddleware from 'redux-saga';
// // import { persistStore } from 'redux-persist';
// import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
// import rootReducer from './store/reducers';
// import rootSaga from './store/sagas'
//
// // Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
// const middleware = createReactNavigationReduxMiddleware(
//     state => state.nav,
// );
// const composeEnhancers = __DEV__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//     : compose;
//
// const sagaMiddleware = createSagaMiddleware();
//
// const App = createReduxContainer(RootStack);
//
// const mapStateToProps = (state) => ({
//     nav: state.nav,
// });
//
// const AppWithNavigationState = connect(mapStateToProps)(App);
//
// const store = createStore(
//     rootReducer,
//     applyMiddleware(middleware),
// );
//
//
// /*const persistOptions = {
//     whitelist: ['auth'],
//     blacklist: ['navigation'],
//     storage: AsyncStorage
// };
//
// persistStore(store, persistOptions, () => {
//
// });*/
//
//
// const Root = () => {
//     return (
//         <Provider store={store}>
//             <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
//                 <AppWithNavigationState />
//             </SafeAreaView>
//         </Provider>
//     )
// };
//
// export default Root;
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import React from 'react';
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
