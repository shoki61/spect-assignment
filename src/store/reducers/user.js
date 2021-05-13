import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    error: null,
    loading: null
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.USER_LOGIN_START:
            return {
                state,
                loading: true
            };
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                state,
                token: action.userData.token,
                error: null,
                loading: false
            };
        case actionTypes.USER_LOGIN_FAIL: 
            return {
                state,
                token: null,
                error: true,
                loading: false
            };
        default: return state;
    };
};

export default reducer;