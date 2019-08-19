import { SEARCH_USERS, SET_LOAD, CLEAR, GET_USER, CLEAR_NAME } from './types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                alert: null,
                screenName: ''
            };
        case GET_USER:
            return {
                ...state,
                userInfo: action.payload.data,
                screenName: action.payload.screenName,
                loading: false
            };
        case SET_LOAD:
            return {
                ...state,
                loading: true
            };
        case CLEAR:
            return {
                ...state,
                users: [],
                loading: false
            };
        case CLEAR_NAME:
            return {
                ...state,
                screenName: ''
            };
        default:
            return state;
    }
};
