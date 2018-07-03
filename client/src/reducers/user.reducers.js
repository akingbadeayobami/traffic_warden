import {userConstants} from '../constants';

const initial = {
    user: {
            id: null,
            displayName: null
        }
};

const user = (state = initial, action) => {
    if (action.type === userConstants.SET_USER) {
        return {...state, user: action.payload };
    }
    return state;
};
export default user;