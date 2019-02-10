import { takeLatest, all } from 'redux-saga/effects';

import { LOGIN_START } from './../types/auth';
import { loginEmail } from './../sagas/auth';

export default function* root () {
    yield all([
        // takeLatest(LOGIN_START, loginEmail),
    ]);
}
