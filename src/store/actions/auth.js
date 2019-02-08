import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS } from './../types/auth';

export const startLogin = (data: {}) => ({
    type: LOGIN_START,
    payload: data
});

export const successLogin = (data: {}) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const failLogin = (error: {}) => ({
    type: LOGIN_FAIL,
    payload: error
});
