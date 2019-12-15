import React from 'react';
import ServersNavItem from './servers_nav_item';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

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
      <>
        <div>
          <Link to='/channels/@me'>
            <li className='channels-nav-icon icon-me'>H</li>
          </Link>
          <div className='channels-nav-icon-border'></div>
        </div>

        <ul>
          {ServerLis}
        </ul>

        <div>
          <button 
            className='channels-nav-icon icon-add'
            onClick={() => openModal('add_server')}>+
          </button>
        </div>
      </>
    );
  }
}