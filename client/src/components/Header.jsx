import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

export default (props => {
    const {
        displayName,
        connected,
    } = props;
    return (
        <Navbar left>
            <div className="container">
                <NavItem href='#'>Traffic Warden</NavItem>
                <NavItem href='#' className="right">Hi, {displayName}</NavItem>
                <NavItem href='#' className="right">{
                    connected ? 'Connected' : 'Not Connected'
                }</NavItem>
            </div>
        </Navbar>
    );
});
