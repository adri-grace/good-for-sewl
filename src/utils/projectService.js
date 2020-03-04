const BASE_URL = '/api/projects/';

function createProject(info) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({ 'Content-type' : 'application/json' }),
        body: JSON.stringify(info)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something is wrong.');
        }
    })
}

export default {
    createProject
}