import * as actionTypes from './actionTypes';
import axios from 'axios';


const loginSuccess = data => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        userData: data
    };
};

const loginFail = message => {
    return {
        type: actionTypes.USER_LOGIN_FAIL,
        errorMesage: message
    };
};

export const login = () => {
    axios.post('https://api.spectcommunity.com/api/Auth/login')
        .then(res => loginSuccess(res.data))
        .catch(err => loginFail(err))
};
