import React, { Component } from 'react';
import { connect } from "react-redux";
import Form from './Form';
import Post from './Post';
import Header from './Header';
import {connectToSocket } from '../actions/connection.actions';
import {
    listenForNewComment, listenForNewVote, listenForNewPost,
    makeNewComment, makeNewPost, upVotePost, downVotePost,
    getPreviousPosts
 } from '../actions/posts.actions';
import {getUserDetails } from '../actions/user.actions';
import '../App.css';

class TrafficWarden extends Component {
    componentWillMount() {
        this.props.connectToSocketAndRegisterListeners();
        this.props.getUserDetails();
        this.props.getPreviousPosts();
    }
    render() {
        const {
            user,
            connection,
            posts
        } = this.props;
        return (
            <div>
                <Header displayName={user.displayName} connected={connection.connected} />
                <Form />
                <div className="container">
                    <Post posts={[1,2,3]}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        user: state.user,
        connection: state.connection
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        connectToSocketAndRegisterListeners: () => {
            dispatch(connectToSocket());
            dispatch(listenForNewComment());
            dispatch(listenForNewVote());
            dispatch(listenForNewPost());
        },
        getPreviousPosts: () => {
            dispatch(getPreviousPosts());
        },
        getUserDetails: () => {
            dispatch(getUserDetails());
        },
        makeNewPost: (message,location,level) => {
            dispatch(makeNewPost(message,location,level));
        },
        makeNewComment: (post_id,message) => {
            dispatch(makeNewComment(post_id,message));
        },
        upVotePost: (postId) => {
            dispatch(upVotePost(postId));
        },
        downVotePost: (postId) => {
            dispatch(downVotePost(postId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficWarden);
 
