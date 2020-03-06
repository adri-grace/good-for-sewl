import tokenService from './tokenService';
const BASE_URL = '/api/projects/';

function createProject(info) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({ 
            'Content-type' : 'application/json',
            'Authorization' : 'Bearer ' + tokenService.getToken() }),
        body: JSON.stringify(info)
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Are you logged in?');
    })
}

function index() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json());
}

function deleteProject() {
    return fetch(BASE_URL + '_id', {
        method: 'DELETE',
        // headers: new Headers({ 
        //     'Content-type' : 'application/json',
        //     'Authorization' : 'Bearer ' + tokenService.getToken() }),
    }).then(res => res.json());  
}

export default {
    createProject,
    index,
    deleteProject
}