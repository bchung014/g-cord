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
          <NavLink to='/servers/@me' className='servers-nav-link'>
            <i className="fas fa-city"></i>
          </NavLink>

          <div className='arrow-left'></div>
          <div className='servers-nav-tag'>Crib</div>
        </li>

        <div className='servers-nav-icon-border'></div>

        {ServerLis}

        <li className='servers-nav-item green-icon'>
          <div
            className='servers-nav-link'
            onClick={() => openModal('add_server')}>
            +
          </div>

          <div className='arrow-left'></div>
          <div className='servers-nav-tag'>Add a Server </div>
        </li>
      </ul>
    );
  }
}