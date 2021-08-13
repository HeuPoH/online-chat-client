/**
 * Fetch to server
 * 
 * @param {string} url 
 * @param {string} method 
 * @param {Object} data 
 * @returns {Promise}
 */
export async function asyncQuery(url, method, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.responseType = 'json';
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        xhr.onload = () => {
            (xhr.status === 200 || xhr.status === 201) ? resolve(xhr.response) : reject(xhr.response);
        };
        xhr.send(JSON.stringify(data));
    });
}