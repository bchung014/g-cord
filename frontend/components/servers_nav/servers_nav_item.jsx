import React from 'react';
import { Link } from 'react-router-dom';

const ServersNavItem = ({ server }) => {
  return(
    <Link to={`/channels/${server.id}`}>  
      <li className='channels-nav-icon'>
        {/* change this to conditonally check for 2 letters? and server avatar */}
        {server.name[0]}

        {/* for server hover tags */}
        {/* <div className='channels-nav-tag-holder'>
          <span className='channels-nav-tag'>{server.name}</span>
        </div> */}
      </li>
    </Link>
  );
};

export default ServersNavItem