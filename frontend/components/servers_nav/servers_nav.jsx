import React from 'react';
import ServersNavItem from './servers_nav_item';
import { NavLink } from 'react-router-dom';

export default class ServersNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    const { servers, openModal } = this.props;
    const ServerLis = servers.map((server, idx) => {
      return (
        <ServersNavItem 
          key={idx}
          server={server}/>
      );
    });

    return (
      <ul className='servers-nav-container'>
        <li className='servers-nav-item blue-icon'>
          <NavLink to='/channels/@me' className='servers-nav-link'>
            H
           </NavLink>
        </li>

        <div className='servers-nav-icon-border'></div>

        {ServerLis}

        <li className='servers-nav-item green-icon'>
          <div
            className='servers-nav-link'
            onClick={() => openModal('add_server')}>
            +
           </div>
        </li>
      </ul>
    );
  }
}


{/* for server hover tags */}
{/* <div className='channels-nav-tag-holder'>
  <span className='channels-nav-tag'>Home</span>
</div> */}