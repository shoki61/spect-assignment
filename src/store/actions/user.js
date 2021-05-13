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

export const emailEntered = email => {
    return {
        type: actionTypes.EMAIL_ENTERED,
        email
    };
};

export const passwordEntered = password => {
    return {
        type: actionTypes.PASSWORD_ENTERED,
        password
    };
};

export const usernameEntered = username => {
    return {
        type: actionTypes.USERNAME_ENTERED,
        username
    };
};

const signUpStart = () => {
    return {
        type: actionTypes.SIGN_UP_START
    };
};

const signUpSuccess = response => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        data: response.data
    };
};

const signUpFail = () => {
    return {
        type: actionTypes.SIGN_UP_FAIL
    };
};

export const signUp = (email, password, username) => {
    return dispatch => {
        dispatch(signUpStart());
        dispatch(signUpSuccess())
        // axios()
        //     .then(res => dispatch(signUpSuccess(res.data)))
        //     .catch(err => dispatch(signUpFail()))
    };
};