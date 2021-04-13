import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        idToken: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, method) => {
    return dispatch => {
        dispatch(authStart());
        console.log(email, password, method);
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCurfyQ84hMcT6nKbdruESY70v6Hk1ZxL0';
        if(method === 'signIn') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCurfyQ84hMcT6nKbdruESY70v6Hk1ZxL0';
        }
        axios.post(url, authData)
        .then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.localId));
        })
        .catch(error => {
            dispatch(authFail(error.response.data.error));
        })
    }
}