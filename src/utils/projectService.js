import tokenService from './tokenService';
const BASE_URL = '/api/projects/';

function createProject(info) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({ 
            'Content-type' : 'application/json',
            'Authorization' : 'Bearer ' + tokenService.getToken() }),
        body: JSON.stringify(info)
    }).then(response => {
        if (response.ok) return response.json();
        throw new Error('Are you logged in?');
    })
}

function index() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json());
}
export default {
    createProject,
    index
}