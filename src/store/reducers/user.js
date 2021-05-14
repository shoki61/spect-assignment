import * as actionTypes from '../actions/actionTypes';

const initialState = {
    username:'',
    email:'',
    password:'',
    policies: false,
    token: null,
    error: null,
    loading: null
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.USER_LOGIN_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.userData.token,
                error: null,
                loading: null
            };
        case actionTypes.USER_LOGIN_FAIL: 
            return {
                ...state,
                token: null,
                error: true,
                loading: null
            };
        case actionTypes.EMAIL_ENTERED: 
            return {
                ...state,
                email: action.email
            };
        case actionTypes.PASSWORD_ENTERED: 
            return {
                ...state,
                password: action.password
            };
        case actionTypes.USERNAME_ENTERED:
            return {
                ...state,
                password: action.username
            };
        case actionTypes.POLICY:
            return {
                ...state,
                policies: true
            };
        case actionTypes.SIGN_UP_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: null,
                token: action.data.token
            };
        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                loading: null,
                error: true
            };
        default: return state;
    };
};

export default reducer;