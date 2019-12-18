import React from 'react';
import ServersNav from '../servers_nav/servers_nav_container';
import Menu from '../menu/menu';

import ChatRoom from "../chat_room/chat_room";

export default class Channels extends React.Component {

  render() {
    return (
      <div className='channels-container'>
        <div className='channels-servers-nav-container'>
          <ServersNav />
        </div>

        <div className='channels-menu-container'>
          <Menu />
        </div>
        
        <div className='channels-content-container'>
          <ChatRoom />
        </div>
      </div>
    );
  }
}