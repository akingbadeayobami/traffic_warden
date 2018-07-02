import {userConstants} from '../constants';

const initial = {
    id: null,
    displayName: null
};

const user = (state = initial, action) => {
    if (action.type === userConstants.SET_USER) {
        return {...state, id: action.payload.id, displayName: action.payload.display_name };
    }
    return state;
};
export default user;