import React from 'react';
import { NavLink } from 'react-router-dom';

const ServersNavItem = ({ server }) => {
  return(
    <li className='servers-nav-item blue-icon'>
      <NavLink
        to={`/channels/${server.id}`}
        className='servers-nav-link'>
        {server.name[0]}
      </NavLink>
    </li>
  );
};

export default ServersNavItem


{/* for server hover tags */}
{/* <div className='channels-nav-tag-holder'>
  <span className='channels-nav-tag'>{server.name}</span>
</div> */}