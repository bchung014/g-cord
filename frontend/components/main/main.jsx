import React from 'react';
import ServersNav from '../servers_nav/servers_nav_container';

export default class Main extends React.Component {

  render() {
    return (
      <div className='main-container'>
        <div className='main-nav-container'>
          <span className='tester'>h1</span>
          {/* <ServersNav /> */}
        </div>
        <div className='main-menu-container'>
          <h1>Menu</h1>
        </div>
        <div className='main-content-container'>
          <h1>Content</h1>
          <button onClick={this.props.logout}>LOGOUT HERE</button>
        </div>
      </div>
    );
  }
  
}
