import {postsConstants} from '../constants'; 

import {
    listenForNewComment as listenForNewCommentService,
    listenForNewPost as listenForNewPostService,
    listenForNewVote as listenForNewVoteService,
    makeNewPost as makeNewPostService,
    makeNewVote as makeNewVoteService,
	makeNewComment as makeNewCommentService,  
} from '../services/socket.service';

import {
    getPreviousPosts as getPreviousPostsService,  
} from '../services/http.service';

const listenForNewPost = () => {
    return dispatch => {
        const onNewPost = (data) => {
            dispatch({ type: postsConstants.NEW_POST, post: data.post });
        }   
        listenForNewPostService(onNewPost);
    };
};

const listenForNewComment = () => {
    return dispatch => {
        const onNewComment = (data) => {
            dispatch({ type: postsConstants.NEW_COMMENT, comment: data.comment });
        }   
        listenForNewCommentService(onNewComment);
    };
};

const listenForNewVote = () => {
    return dispatch => {
        const onNewVote = (data) => {
            dispatch({ type: postsConstants.NEW_VOTE, vote: data.vote });
        }   
        listenForNewVoteService(onNewVote);
    };
};

const getUserFromState = (state) => {
    const {
        user : {
            id: user_id
        }
    } = state;
    return user_id;
}

//TODO Systhensis new MAKEs
const makeNewPost = (message,location,level) => {
    return (dispatch, getState) => {
        const user_id = getUserFromState(getState());
        const onNewPost = (data) => {
            dispatch({ type: postsConstants.NEW_POST, post: data.post });
        }
        makeNewPostService({message, location, level, user_id}, onNewPost);
    };
};

const makeNewComment = (post_id,message) => {
    return (dispatch, getState) => {
        const user_id = getUserFromState(getState());
        const onNewComment = (data) => {
            dispatch({ type: postsConstants.NEW_COMMENT, comment: data.comment });
        }
        makeNewCommentService({post_id, message, user_id}, onNewComment);
    };
};

const makeNewVote = (post_id, up_or_down) => {
    return (dispatch, getState) => {
        const user_id = getUserFromState(getState());
        const onNewVote = (data) => {
            dispatch({ type: postsConstants.NEW_VOTE,  vote: data.vote});
        }
        makeNewVoteService({post_id, up_or_down, user_id}, onNewVote);
    };
};

const upVotePost = (postId) => {
    return makeNewVote(postId, true);
};

const downVotePost = (postId) => {
   return makeNewVote(postId, false);
};

const getPreviousPosts = () => { 
    return dispatch => {
        getPreviousPostsService().then(posts => {
            dispatch({
                type: postsConstants.SET_POSTS,
                payload: posts
            });
        });
    };
};

export {
    makeNewPost,
    upVotePost,
    downVotePost,
    makeNewComment,
    listenForNewComment,
    listenForNewPost,
    listenForNewVote,
    getPreviousPosts
}