import { Alert } from 'react-native';
import * as actionTypes from './actionTypes';
import axios from 'axios';


const loginStart = () => {
    return {
        type: actionTypes.USER_LOGIN_START
    };
};

const loginSuccess = response => {
    Alert.alert(
        'Success',
        'Wellcome again'
    );
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        userData: response.data
    };
};

const loginFail = () => {
    Alert.alert(
        'hoppoooooo',
        'incorrect password'
    );
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

export const policy = () => {
    return {
        type: actionTypes.POLICY
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
        data: {token:'dsfsfsafsf5sdf5sd65fsdf656sdf'}
    };
};

const signUpFail = () => {
    return {
        type: actionTypes.SIGN_UP_FAIL
    };
};

export const signUp = (email, password, username, policies) => {
    return dispatch => {
        dispatch(signUpStart());
        setTimeout(() => dispatch(signUpSuccess()), 3000)
        // axios.post('https://api.spectcommunity.com/api/Auth/sign-up', {email, password, username, policies})
        //     .then(res => dispatch(signUpSuccess(res.data)))
        //     .catch(err => dispatch(signUpFail()))
    };
};