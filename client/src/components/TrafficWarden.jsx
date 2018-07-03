import React, { Component } from 'react';
import { connect } from "react-redux";
import Form from './Form';
import Post from './Post';
import Header from './Header';
import { connectToSocket } from '../actions/connection.actions';
import {
    listenForNewComment, listenForNewVote, listenForNewPost,
    makeNewComment, makeNewPost, upVotePost, downVotePost,
    getPreviousPosts
} from '../actions/posts.actions';
import { getUserDetails } from '../actions/user.actions';
import '../App.css';

class TrafficWarden extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postForm: {
                message: "",
                location: "Mile 12",
                level: "0",
            }
        };
        this.handlePostMessageChange = this.handlePostMessageChange.bind(this);
        this.handlePostLocationChange = this.handlePostLocationChange.bind(this);
        this.handlePostLevelChange = this.handlePostLevelChange.bind(this);
        this.handleNewPostSubmission = this.handleNewPostSubmission.bind(this);
    }

    componentWillMount() {
        this.props.connectToSocketAndRegisterListeners();
        this.props.getUserDetails();
        this.props.getPreviousPosts();
    }

    handlePostMessageChange(e) {
        this.setState({
            ...this.state,
            postForm: {
                ...this.state.postForm,
                message: e.target.value
            }
        });
    }

    handlePostLocationChange(e) {
        this.setState({
            ...this.state,
            postForm: {
                ...this.state.postForm,
                location: e.target.value
            }
        });
    }

    handlePostLevelChange(e) {
        this.setState({
            ...this.state,
            postForm: {
                ...this.state.postForm,
                level: e.target.value
            }
        });
    }

    handleNewPostSubmission(e) {
        e.preventDefault();
        const { message, location, level } = this.state.postForm;
        this.props.makeNewPost({
            message,
            location,
            level
        });
        // TODO clear the form field here
    }

    render() {
        const {
            user,
            connection,
            posts,
            makeNewComment,
            upVotePost,
            downVotePost
        } = this.props;

        return (
            <div>
                <Header displayName={user.user.displayName} connected={connection.connected} />
                <Form
                    handleNewPostSubmission={this.handleNewPostSubmission}
                    handlePostMessageChange={this.handlePostMessageChange}
                    handlePostLevelChange={this.handlePostLevelChange}
                    handlePostLocationChange={this.handlePostLocationChange}
                />
                <div className="container">
                    <Post posts={posts.posts} makeNewComment={makeNewComment} upVotePost={upVotePost} downVotePost={downVotePost} />
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
        makeNewPost: (message, location, level) => {
            dispatch(makeNewPost(message, location, level));
        },
        makeNewComment: (post_id, message) => {
            dispatch(makeNewComment(post_id, message));
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

