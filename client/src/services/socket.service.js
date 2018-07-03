import {
	Socket
} from 'phoenix';

const WEBSOCKET_URL = `ws://localhost:4000/socket`;
// const WEBSOCKET_URL = `ws://${window.location.hostname}:${window.location.port}/socket`;
// TODO: Subject url must be received from query string
const CHANNEL_TOPIC = 'posts:traffic';

let channel = null;

function connectToSocket(connectedSuccessfully, connectionNotSuccessfully) {
	const socket = new Socket(WEBSOCKET_URL, {
		params: {},
		logger: (kind, msg, data) => {
			console.log(`${kind}: ${msg}`, data);
		}, // TODO remove
	});
	socket.connect();
	channel = socket.channel(CHANNEL_TOPIC);
    return channel.join().
        receive('ok', connectedSuccessfully).
        receive('error',connectionNotSuccessfully);
}

function listenForNewComment(onNewComment) {
	channel.on('new:comment', onNewComment);
}

function listenForNewPost(onNewPost) {
	channel.on('new:post', onNewPost);
}

function listenForNewVote(onNewVote) {
	channel.on('new:vote', onNewVote);
}

function makeNewPost(params, onNewPost){
	channel.push('make:post', params)
    .receive('ok', onNewPost)
    .receive('error', () => {
      console.error('Error creating new post');
    });
}

function makeNewVote(params, onNewVote){
	channel.push('make:vote', params)
    .receive('ok', onNewVote)
    .receive('error', () => {
      console.error('Error creating new vote');
    });
}

function makeNewComment(params, onNewComment){
	channel.push('make:comment', params)
    .receive('ok', onNewComment)
    .receive('error', () => {
      console.error('Error creating new comment');
    });
}

export {
	connectToSocket, 
	listenForNewComment,
	listenForNewPost, 
	listenForNewVote,
	makeNewPost,
	makeNewVote,
	makeNewComment,
};
