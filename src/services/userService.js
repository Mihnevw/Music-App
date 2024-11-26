import * as request from './requester.js';
import * as authService from '../services/authService.js';

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => { //email и password са data-тата
    return request.post(`${baseUrl}/login`, { email, password })
        .then(user => {
            authService.saveUser(user)

            return user;
        })
};

export const register = (email, password, confPass) => { //email и password са data-тата
    return request.post(`${baseUrl}/register`, { email, password, confPass })
        .then(user => {
            authService.saveUser(user)

            return user;
        })
};

export const logout = () => {
    return fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': authService.getToken()
        }
    })
        .then(() => {
            authService.deleteUser();
        })
};