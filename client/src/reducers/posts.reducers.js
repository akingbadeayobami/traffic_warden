import {postsConstants} from '../constants';

const initial = [];

const posts = (state = initial, action) => { 
    if (action.type === postsConstants.SET_POSTS) {
        return {...state, posts: action.payload };
    }

    // if (action.type === postsConstants.NEW_POST) {
    //     return {...state, posts: action.payload };
    // }

    // if (action.type === postsConstants.NEW_COMMENT) {
    //     return {...state, posts: action.payload };
    // }

    // if (action.type === postsConstants.NEW_VOTE) {
    //     return {...state, posts: action.payload };
    // }

    return state;
};
export default posts;