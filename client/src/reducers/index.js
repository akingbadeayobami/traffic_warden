import { combineReducers } from 'redux';

import channel from "./channel.reducers";
import posts from "./posts.reducers";

const reducers = combineReducers({
    channel,
    posts,
});

export default reducers;