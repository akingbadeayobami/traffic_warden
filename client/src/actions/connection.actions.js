import {connectionConstants} from '../constants';
import {
    connectToSocket as connectToSocketService
} from '../services/socket.service'; 

const connectToSocket = () => {
    return dispatch => {
        const connectedSuccessfully = (response) => {
            dispatch({ type: connectionConstants.CONNECTION_SUCCESSFULL });
        }
        const connectionNotSuccessfully = () => {
            dispatch({ type: connectionConstants.CONNECTION_NOT_SUCCESSFULL });
        }   
        connectToSocketService(connectedSuccessfully, connectionNotSuccessfully);
    };
};

export {
    connectToSocket
}