export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut(
        ).then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'});
            window.location="/signin";
        });
    }
};

export const signIn = (credentials, callback) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'});
            callback=true;
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err});
            callback=false;
        });
    }
};


