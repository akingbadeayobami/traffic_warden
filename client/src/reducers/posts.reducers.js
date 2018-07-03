import {postsConstants} from '../constants';

const initial = {
    posts: []
};

const posts = (state = initial, action) => { 
    if (action.type === postsConstants.SET_POSTS) {
        return {...state, posts: action.payload };
    }

    if (action.type === postsConstants.NEW_POST) {
        state.posts.unshift(action.payload);
        return {...state, posts: state.posts  };
    }

    // if (action.type === postsConstants.NEW_COMMENT) {
    //     return {...state, posts: action.payload };
    // }

    // if (action.type === postsConstants.NEW_VOTE) {
    //     return {...state, posts: action.payload };
    // }

    return state;
};
export default posts;