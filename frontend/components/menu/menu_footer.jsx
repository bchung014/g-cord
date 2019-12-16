import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class MenuFooter extends React.Component {

  render() {
    return (
      <div className='menu-footer'>
        <div className='menu-footer-user-container'>
          <div className='menu-footer-user-icon'>
            {this.props.currentUser.username[0]}
          </div>

          <div className='menu-footer-user-info'>
            {this.props.currentUser.username}
          </div>
        </div>

        <button onClick={this.props.logout} className='menu-footer-logout'>
          Logout
        </button>
      </div>
    );
  }

}

const msp = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(MenuFooter);