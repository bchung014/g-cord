import React from 'react';
import ServersNav from '../servers_nav/servers_nav_container';

export default class Channels extends React.Component {

  render() {
    return (
      <div className='channels-container'>
        <div className='channels-nav-container'>
          <ServersNav />
        </div>

        <div className='channels-menu-container'>
          <h1>Menu</h1>
        </div>
        
        <div className='channels-content-container'>
          <h1>Content</h1>
          <button onClick={this.props.logout}>LOGOUT HERE</button>
        </div>
      </div>
    );
  }
}