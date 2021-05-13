import * as actionTypes from '../actions/actionTypes';

const initialState = {
    email: 'exaple@mail.com'
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    };
};

export default reducer;