import { asyncQuery } from "../asyncQuery";

/**
 * Sign in query.
 * 
 * @param {Object} candidateData 
 * @returns {Promise}
 */
export async function signIn(candidateData) {
    const url = '/user/signIn';
    const method = 'POST';

    return await asyncQuery(url, method, candidateData);
}