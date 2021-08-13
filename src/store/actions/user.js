import { query } from "../../api";
import { SIGN_IN_ERROR, SIGN_IN_RECEIVE, SIGN_OUT } from "../constants";

/**
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

            dispatch(userActionReceive(response));
        } catch(error) {
            const errorMessage = error.errorMessage || 'Произошла ошибка';

            dispatch(userActionError(errorMessage));
        }
    }
}

/**
 * Restore users state.
 */
function userRestoreState() {
    return async function(dispatch) {
        try {
            const response = await query.restoreState();

            dispatch(userActionReceive(response));
        } catch(error) {
            console.log(error);
        }
    }
}

/**
 * 
 * @param {Object} userData 
 * @returns {Object}
 */
function userActionReceive(userData) {
    return {
        type: SIGN_IN_RECEIVE,
        payload: { ...userData }
    };
}

/**
 * @param {string} error 
 * @returns {Object}
*/
function userActionError(error) {
    return {
        type: SIGN_IN_ERROR,
        payload: { error }
    };
}

/**
 * Sign out.
 */
function userSignOutAction() {
    return async function(dispatch) {
        try {
            await query.signOut();

            dispatch(userSignOutActionReceive());
        } catch(error) {
            console.log(error);
        }
    }
}

function userSignOutActionReceive() {
    return {
        type: SIGN_OUT
    }
}

export { userSignInAction, userSignOutAction, userActionReceive, userRestoreState };