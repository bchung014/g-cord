import React from 'react';
import { NavLink } from 'react-router-dom';

const ServersNavItem = ({ server }) => {
  let sanitizedServerName;

  if (server) {
    if (server.name.length > 20) {
      sanitizedServerName = server.name.slice(0, 21) + '...';
    } else {
      sanitizedServerName = server.name;
    }
  }

  return(
    <li className='servers-nav-item blue-icon'>
      <NavLink
        to={`/channels/${server.id}`}
        className='servers-nav-link'>
        {server.name[0]}
      </NavLink>

      <div className='arrow-left'></div>
      <div className='servers-nav-tag'>{sanitizedServerName}</div>
    </li>
  );
};

export default ServersNavItem;