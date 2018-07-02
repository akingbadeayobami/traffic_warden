import {connectionConstants} from '../constants';

const initial = {
    connected: false
};

const connection = (state = initial, action) => {

    // Setting connection status
    if (action.type === connectionConstants.CONNECTION_SUCCESSFULL) {
        return {...state, connected: true };
    }

    if (action.type === connectionConstants.CONNECTION_NOT_SUCCESSFULL) {
        return {...state, connected: false };
    }

    //TODO remove
    // // Update the loading indicator and append the new message
    // if (action.type === chatConstants.POST_BOT_MESSAGE || action.type === chatConstants.POST_USER_MESSAGE) {

    //     let loading;

    //     // If message is from bot then hide the loading indicator 
    //     if (action.type === chatConstants.POST_BOT_MESSAGE) {
    //         loading = false;
    //     }

    //     // If message is from user then show the loading indicator       
    //     if (action.type === chatConstants.POST_USER_MESSAGE) {
    //         loading = true;
    //     }

    //     return {
    //         ...state,
    //         chat: state.chat.concat(action.payload),
    //         loading: loading
    //     }

    // }
    // Clear All Chat Messages And Update The New Session ID
    // if (action.type === chatConstants.NEW_CHAT_SESSION) {


    //     return {
    //         ...state,
    //         chat: [action.payload],
    //         session_id: action.payload.session_id
    //     }

    // }

    // if (action.type === chatConstants.SET_CHAT_SESSION_ID) {
    //     return {
    //         ...state,
    //         session_id: action.payload.session_id
    //     }
    // }
    return state;

};

export default connection;