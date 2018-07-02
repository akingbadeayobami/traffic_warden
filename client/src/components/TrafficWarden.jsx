import React, { Component } from 'react';
import { connect } from "react-redux";
import Form from './Form';
import Post from './Post';
import {connectToSocket, listenForNewComment } from '../actions/channel.actions';
import '../App.css';

class TrafficWarden extends Component {
    componentWillMount() {
        this.props.connectToSocketAndRegisterListeners();
    }
    render() {
        return (
            <div>
                <Form />
                <div className="container">{
                    [1, 2, 3].map(x =>
                        <Post />
                    )
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        connectToSocketAndRegisterListeners: () => {
            dispatch(connectToSocket());
            dispatch(listenForNewComment());
        },
        // postMessage: (message, session_id) => {
        //     dispatch(postMessage(message, session_id));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficWarden);
 
