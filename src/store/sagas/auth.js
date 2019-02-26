import { put, call } from 'redux-saga/effects';
import { successLogin, failLogin } from '../actions/auth';

export function* loginEmail(api, { payload }) {
    try {
        // Todo make api call
    } catch (err) {
        yield put(failLogin({ error: 'internal error' }));
    }
}
