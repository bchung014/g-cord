import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class ChannelsNavItem extends React.Component {

  render() {
    const { channel } = this.props;

    return(
      <NavLink
        to='/'
        className = 'channels-nav-link' >
        <li className='channels-nav-item'>
          <div className='channels-nav-name'>
            <i className="fas fa-hashtag"></i>
            {channel.name}
          </div>
          <div className='channels-nav-buttons'>
            buttons
          </div>
        </li>
      </NavLink>
    )    
  }

}

const msp = state => {
};

const mdp = dispatch => {
};

export default connect(null, null)(ChannelsNavItem);