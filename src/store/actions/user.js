import { query } from "../../api/index";
import {
    USER_UPDATE_DATA,
    USER_REQUEST_RECEIVE,
    USER_REQUEST_ERROR,
    USER_DELETE_DATA } from "../constants";

export const userActions = {
    signIn: signInAction,
    signOut: signOutAction,
    restoreState: userRestoreState,
    signUp: signUpAction
}

/**
 * Restore user state.
 */
 function userRestoreState() {
    return async function(dispatch) {
        try {
            const response = await query.user.restoreState();

            dispatch(updateStateAction(response));
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
 function signUpAction(candidateData) {
    return async function(dispatch) {
        try {
            await query.user.signUp(candidateData);
            
            dispatch(requestReceiveAction('Успешная регистрация. Перейдите к авторизации'));
        } catch(error) {
            dispatch(requestErrorAction(error.error))
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
function signInAction(candidateData) {
    return async function(dispatch) {
        try {
            const response = await query.user.signIn(candidateData);

            dispatch(updateStateAction(response));
        } catch(error) {
            dispatch(requestErrorAction(error.error));
        }
    };
}

/**
 * Sign out.
 */
 function signOutAction() {
    return async function(dispatch) {
        try {
            await query.user.signOut();

            dispatch(signOutReceiveAction());
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
function updateStateAction(userData) {
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
function requestReceiveAction(message) {
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
function requestErrorAction(message) {
    return {
        type: USER_REQUEST_ERROR,
        payload: { message }
    };
}

/**
 * Clear user state.
 */
function signOutReceiveAction() {
    return {
        type: USER_DELETE_DATA
    };
}