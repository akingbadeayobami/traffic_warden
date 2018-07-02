import { combineReducers } from 'redux';

import connection from "./connection.reducers";
import posts from "./posts.reducers";
import user from "./user.reducers";

const reducers = combineReducers({
    connection,
    posts,
    user,
});

export default reducers;