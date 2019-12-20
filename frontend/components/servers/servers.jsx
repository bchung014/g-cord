import React from 'react';
import ServersNav from '../servers_nav/servers_nav_container';
import Menu from '../menu/menu';

import { Route } from 'react-router-dom';
import ChatRoom from "../chat_room/chat_room";

export default class Servers extends React.Component {
  render() {

    return (
      <div className='servers-container'>
        <div className='servers-main-nav-container'>
          <ServersNav />
        </div>

        <div className='servers-menu-container'>
          <Menu />
        </div>
        
        <div className='servers-content-container'>
          {/* Rendering components for when in a chat channel */}
          <Route
            path='/servers/:serverId/channels/:channelId'
            render={() => 
              <>
                <ChatRoom />
                <div className='members-menu'>yer boys</div>
              </>
            }/>
        </div>
      </div>
    );
  }
}