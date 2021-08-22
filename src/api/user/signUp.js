import { asyncQuery } from "../asyncQuery";

export async function signUp(candidateData) {
    const url = '/user/signUp';
    const method = 'POST';

    return await asyncQuery(url, method, candidateData);
}