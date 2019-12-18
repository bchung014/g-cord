import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class ChannelsNavItem extends React.Component {

  render() {
    const { channel, openModal } = this.props;
    let sanitizedChannelName;

    if (channel.name.length > 13) {
      sanitizedChannelName = channel.name.slice(0, 14) + '...';
    } else {
      sanitizedChannelName = channel.name;
    }

    return(
      <NavLink
        to={`/servers/${channel.server_id}/channels/${channel.id}`}
        className = 'channels-nav-link' >
        <li className='channels-nav-item'>
          <div className='channels-nav-name'>
            <i className="fas fa-hashtag"></i>
            <p>{sanitizedChannelName}</p>
          </div>
          <div className='channels-nav-buttons'>
            <i
              onClick={() => openModal('invite')} 
              className="fas fa-sign-out-alt"></i>
            <i className="fas fa-cog"></i>
          </div>
        </li>
      </NavLink>
    )    
  }

}

const msp = state => {
};

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mdp)(ChannelsNavItem);