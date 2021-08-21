import { query } from "../../api";
import {
    USER_UPDATE_DATA,
    USER_REQUEST_RECEIVE,
    USER_REQUEST_ERROR,
    USER_DELETE_DATA } from "../constants";

/**
 * Restore user state.
 */
 function userRestoreState() {
    return async function(dispatch) {
        try {
            const response = await query.restoreState();

            dispatch(userUpdateAction(response));
        } catch(error) {
            console.log(error);
        }
    }
}

/**
 * Sign up.
 * 
 * @param {Object} candidateData  {
 *                                     nickname: string,
 *                                     password: string,
 *                                     repeatPassword: string
 *                                }
 */
 function userSignUpAction(candidateData) {
    return async function(dispatch) {
        try {
            await query.signUp(candidateData);
            
            dispatch(userRequestReceiveAction('Успешная регистрация. Перейдите к авторизации'));
        } catch(error) {
            const errorMessage = error.errorMessage || 'Произошла неизвестная ошибка';

            dispatch(userRequestErrorAction(errorMessage))
        }
    }
}

/**
 * Sign in.
 * 
 * @param {Object} candidateData {
 *                                    nickname: string,
 *                                    password: string
 *                               }
 * @returns 
*/
function userSignInAction(candidateData) {
    return async function(dispatch) {
        try {
            const response = await query.signIn(candidateData);

            dispatch(userUpdateAction(response));
        } catch(error) {
            const errorMessage = error.errorMessage || 'Произошла неизвестная ошибка';

            dispatch(userRequestErrorAction(errorMessage));
        }
    };
}

/**
 * Sign out.
 */
 function userSignOutAction() {
    return async function(dispatch) {
        try {
            await query.signOut();

            dispatch(userSignOutReceiveAction());
        } catch(error) {
            console.log(error);
        }
    };
}

/**
 * Add/Update user data in state
 * 
 * @param {Object} userData 
 * @returns {Object}
 */
function userUpdateAction(userData) {
    return {
        type: USER_UPDATE_DATA,
        payload: { ...userData }
    };
}

/**
 * Add receive message in response state of user
 * 
 * @param {string} message 
 * @returns {Object}
 */
function userRequestReceiveAction(message) {
    return {
        type: USER_REQUEST_RECEIVE,
        payload: { message }
    };
}

/**
 * Add error message in response state of user
 * 
 * @param {string} message 
 * @returns {Object}
*/
function userRequestErrorAction(message) {
    return {
        type: USER_REQUEST_ERROR,
        payload: { message }
    };
}

/**
 * Clear user state.
 */
function userSignOutReceiveAction() {
    return {
        type: USER_DELETE_DATA
    };
}

export { 
    userSignInAction,
    userSignOutAction,
    userRequestErrorAction,
    userRestoreState,
    userSignUpAction
};