import * as authService from '../services/authService.js';

const request = (method, url, data) => {
    let options = {};
    let token = authService.getToken()
    
    if (method != 'GET') {
        options.method = method;
        options.headers = {
            'Content-Type': 'application/json',
        };

        if (token) { // Ако има token ми го сложи
            options.headers['X-Authorization'] = token;
        }
        options.body = JSON.stringify(data);
    }

    return fetch(url, options)
        .then(res => res.json());
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');