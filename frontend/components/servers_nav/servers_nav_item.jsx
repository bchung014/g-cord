import React from 'react';

const ServersNavItem = ({ server }) => {
  return(
    <li>
      {server.name}
    </li>
  );
};

export default ServersNavItem