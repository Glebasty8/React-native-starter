import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './../types/auth';

const defaultState = {
    user: null,
    isLoading: false,
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case LOGIN_START:
            return {
                ...state,
                user: {},
                isLoading: true,
            };
        default:
            return state;
    }
};
