import { asyncQuery } from "../asyncQuery";

/**
 * Restore state.
 * 
 * @returns {Promise}
 */
export async function restoreState() {
    const url = '/user/restoreState';
    const method = 'POST';

    return await asyncQuery(url, method);
}