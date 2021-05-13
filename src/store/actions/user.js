import * as actionTypes from './actionTypes';
import axios from 'axios';


const loginStart = () => {
    return {
        type: actionTypes.USER_LOGIN_START
    };
};

const loginSuccess = response => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        userData: response.data
    };
};

const loginFail = () => {
    return {
        type: actionTypes.USER_LOGIN_FAIL
    };
};

export const login = (emailOrUserName, password) => {
    return dispatch => {
        dispatch(loginStart());
        axios.post('https://api.spectcommunity.com/api/Auth/login', {emailOrUserName, password})
            .then(res => dispatch(loginSuccess(res.data)))
            .catch(err => dispatch(loginFail()));
    };
};
