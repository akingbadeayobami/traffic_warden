import {
	userConstants
} from '../constants/';

import {
	getNewUser,
} from '../services/http.service';

const getUserDetails = () => {
    return dispatch => {
        if (localStorage.getItem('user')) {
            dispatch({
                type: userConstants.SET_USER,
                payload: JSON.parse(localStorage.getItem('user'))
            });
        } else {
            getNewUser().then(data => {
                const user = data.data;
                localStorage.setItem('user', JSON.stringify(user))
                dispatch({
                    type: userConstants.SET_USER,
                    payload: user
                });
            });
        }
    };
}

export {
    getUserDetails,
}
