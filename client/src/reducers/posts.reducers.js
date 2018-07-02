import {postsConstants} from '../constants';

const initial = {
    posts: []
};

const posts = (state = initial, action) => {

    // Setting POSTS
    if (action.type === postsConstants.SET_POSTS) {
        return {...state, posts: action.payload };
    }

    return state;

};

export default posts;