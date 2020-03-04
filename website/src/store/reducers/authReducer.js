const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {...state, authError: 'Login Failed'};
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{...state, authError: null};
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return {...state, authError: 'Login Failed'};
        case 'ACCOUNT_CREATED':
            console.log('account created');
            return {...state, authError: null};
        default:
            return state;
    }
};
export default authReducer;