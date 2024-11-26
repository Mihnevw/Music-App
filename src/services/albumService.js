import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/albums';

export const getAll = () => { //ВАЖНО ДА СЕ RETURN-Е
    return request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`)
}

export const getOne = (albumId) => {
    return request.get(`${baseUrl}/${albumId}`)
}

export const create = (albumData) => {
    return request.post(baseUrl, albumData) //Това нещо ще създаде request-a ще изпрати нещата ще върне респонса 
}

export const edit = (albumId, albumData) => {
    return request.put(`${baseUrl}/${albumId}`, albumData) //Това нещо ще създаде request-a ще изпрати нещата ще върне респонса 
}

export const remove = (albumId) => {
    return request.del(`${baseUrl}/${albumId}`)
}

export const search = (searchText) => {
    const query = encodeURIComponent(`name LIKE "${searchText}"`)

    return request.get(`${baseUrl}?where=${query}`)
}