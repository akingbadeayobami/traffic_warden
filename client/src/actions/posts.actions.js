import {
	postsConstants
} from '../constants';

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
			dispatch({
				type: postsConstants.NEW_POST,
				payload: data.post
			});
		}
		listenForNewPostService(onNewPost);
	};
};

const listenForNewComment = () => {
	return dispatch => {
		const onNewComment = (data) => {
			dispatch({
				type: postsConstants.NEW_COMMENT,
				comment: data.comment
			});
		}
		listenForNewCommentService(onNewComment);
	};
};

const listenForNewVote = () => {
	return dispatch => {
		const onNewVote = (data) => {
			dispatch({
				type: postsConstants.NEW_VOTE,
				vote: data.vote
			});
		}
		listenForNewVoteService(onNewVote);
	};
};

const getUserFromState = (state) => {
	const {
		user: {
			user: {
				id: user_id
			}
		}
    } = state;
	return user_id;
}

//TODO Systhensis new MAKEs
const makeNewPost = (params) => {
	return (dispatch, getState) => {
		const user_id = getUserFromState(getState());
		const onNewPost = (data) => {
			dispatch({
				type: postsConstants.NEW_POST,
				payload: data.post
			});
		}
		makeNewPostService({ ...params,
			user_id
		}, onNewPost);
	};
};

const makeNewComment = (post_id, message) => {
	return (dispatch, getState) => {
		const user_id = getUserFromState(getState());
		const onNewComment = (data) => {
			dispatch({
				type: postsConstants.NEW_COMMENT,
				payload: data.comment
			});
		}
		makeNewCommentService({
			post_id,
			message,
			user_id
		}, onNewComment);
	};
};

const makeNewVote = (post_id, up_or_down) => {
	return (dispatch, getState) => {
		const user_id = getUserFromState(getState());
		const onNewVote = (data) => {
			dispatch({
				type: postsConstants.NEW_VOTE,
				payload: data.vote
			});
		}
		makeNewVoteService({
			post_id,
			up_or_down,
			user_id
		}, onNewVote);
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
		getPreviousPostsService().then(data => {
			dispatch({
				type: postsConstants.SET_POSTS,
				payload: data.data
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
