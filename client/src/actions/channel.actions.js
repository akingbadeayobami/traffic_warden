import {channelConstants} from '../constants';
const channelServices = require("../services/channel.services");

/**
 * @function getAllSession
 * @description Action for when getting all the sessions
 */
const connectToSocket = () => {

    return dispatch => {

        const connectedSuccessfully = (response) => {
            dispatch({ type: channelConstants.CONNECTION_SUCCESSFULL });
            // dispatch({ type: 'SUBJECT_INFO_LOADED', response });
        }

        const connectionNotSuccessfully = () => {
            dispatch({ type: channelConstants.CONNECTION_NOT_SUCCESSFULL });
        }   

        channelServices.connectToSocket(connectedSuccessfully, connectionNotSuccessfully);

    };

};

const listenForNewComment = () => {

    return dispatch => {

        const onNewComment = (data) => {
            dispatch({ type: 'NEW_COMMENT', comment: data.comment });
        }   

        channelServices.listenForNewComment(onNewComment);

    };

};


export {
    connectToSocket,
    listenForNewComment
}