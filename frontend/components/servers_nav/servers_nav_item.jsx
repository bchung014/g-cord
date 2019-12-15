import React from 'react';
import { Link } from 'react-router-dom';

const ServersNavItem = ({ server }) => {
  return(
    <Link to={`/channels/${server.id}`}>  
      <li className='channels-nav-icon'>
        {/* change this to conditonally check for 2 letters? and server avatar */}
        {server.name[0]}
      </li>
    </Link>
  );
};

export default ServersNavItem