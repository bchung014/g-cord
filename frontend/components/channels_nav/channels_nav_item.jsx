import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ChannelsNavItemDropdown from './channels_nav_item_dropdown';

class ChannelsNavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    e.stopPropagation();
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }

  render() {
    const { channel, openModal } = this.props;
    let sanitizedChannelName;

    if (channel.name.length > 13) {
      sanitizedChannelName = channel.name.slice(0, 14) + '...';
    } else {
      sanitizedChannelName = channel.name;
    }

    const itemDropdown = this.state.dropdownOpen ? <ChannelsNavItemDropdown /> : '';

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
            <div>
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  openModal('invite')
                }}
                className="channels-nav-icon invite-icon fas fa-sign-out-alt"></i>
            </div>

            <div className='channels-nav-settings'>
              <i
                className="channels-nav-icon fas fa-cog"
                onClick={(e) => this.toggleDropdown(e)}
                onBlur={() => this.setState({ dropdownOpen: false })}
                tabIndex='0'>
                {itemDropdown}
              </i>
            </div>
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