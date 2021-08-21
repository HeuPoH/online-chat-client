import { asyncQuery } from "../asyncQuery";

/**
 * @param {number} startRange
 * @returns {Promise}
 */
export async function getMessages(startRange) {
    const url = `/chat?startRange=${startRange}`;
    const method = 'GET';

    return await asyncQuery(url, method, startRange);
}