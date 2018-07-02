import axios from "axios";

const instance = axios.create();

// instance.defaults.baseURL = `http://${window.location.hostname}:${window.location.port}/api`;
// TODO: Subject url must be received from query string
instance.defaults.baseURL = "http://localhost:4000/api";

function getNewUser() {
     return instance.post('newuser');
}

function getPreviousPosts() {
    return instance.get('posts');
}

export {
    getNewUser,
    getPreviousPosts
}