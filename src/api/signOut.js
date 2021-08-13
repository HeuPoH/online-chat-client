import { asyncQuery } from "./asyncQuery";

/**
 * Sign out.
 * 
 * @returns {Promise}
 */
export async function signOut() {
    const url = '/user/signOut';
    const method = 'GET';

    return await asyncQuery(url, method);
}