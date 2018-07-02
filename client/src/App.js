import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import TrafficWarden from './components/TrafficWarden';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar left>
          <div className="container">
            <NavItem href='#'>Traffic Warden</NavItem>
          </div>
        </Navbar>
        <TrafficWarden />
      </div>
    );
  }
}

export default App;
