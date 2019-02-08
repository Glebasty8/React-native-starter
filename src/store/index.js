import { compose, createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas'

const composeEnhancers = __DEV__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    whitelist: ['auth'],
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

sagaMiddleware.run(rootSaga);

export default () => {
    let store = createStore(persistedReducer, composeEnhancers(
        applyMiddleware(sagaMiddleware),
    ));
    let persistor = persistStore(store);
    return { store, persistor }
}
