import {
	Socket
} from 'phoenix';

const WEBSOCKET_URL = `ws://localhost:8000/socket`;
// const WEBSOCKET_URL = `ws://${window.location.hostname}:${window.location.port}/socket`;
// TODO: Subject url must be received from query string
const CHANNEL_TOPIC = 'subject:posts';

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
	channel.on('new_comment', onNewComment);
}

export {
	connectToSocket, 
	listenForNewComment
};
