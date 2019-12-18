import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { leaveServer, deleteServer, fetchServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions.js';

class MenuHeaderDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      currentServer: this.props.currentServer
    }
  }

  removeServer(removeType) {
    const { fetchServers, history } = this.props;

    removeType(this.state.currentServer.id)
      .then(() => {
        history.push('@me');
        fetchServers();
      });
  }

  render() {
    const { currentUser, currentServer } = this.state;
    const { deleteServer, leaveServer, openModal } = this.props;

    // debugger;

    const dropdownOptions = currentUser.id === currentServer.admin_id ?
      <>
        <li 
          className='menu-header-dropdown-invite'
          onClick={() => openModal('invite')}>
          Invite
          <div className='menu-header-dropdown-icon-container'>
            <i className="fas fa-user-plus"></i>
          </div>
        </li>
        <li onClick={() => openModal('edit_server')}>
          Edit
          <div className='menu-header-dropdown-icon-container'>
            <i className="fas fa-edit"></i>
          </div>
        </li>
        <li
          className='menu-header-dropdown-danger'
          onClick={() => this.removeServer(deleteServer)}>
          Delete
          <div className='menu-header-dropdown-icon-container'>
            <i className="fas fa-trash-alt"></i>
          </div>
        </li>
      </> :
      <>
        <li
          className='menu-header-dropdown-invite'
          onClick={() => openModal('invite')}>
          Invite
          <div className='menu-header-dropdown-icon-container'>
            <i className="fas fa-user-plus"></i>
          </div>
        </li>
        <li
          className='menu-header-dropdown-danger' 
          onClick={() => this.removeServer(leaveServer)}>
          Leave
          <div className='menu-header-dropdown-icon-container'>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </li>
      </>

    return (
      <ul className='menu-header-dropdown'>
        {dropdownOptions}
      </ul>
    );
  }
}


const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  currentServer: state.entities.servers[ownProps.match.params.serverId]
});

const mdp = dispatch => ({
  leaveServer: serverId => dispatch(leaveServer(serverId)),
  deleteServer: serverId => dispatch(deleteServer(serverId)),
  fetchServers: () => dispatch(fetchServers()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(MenuHeaderDropdown));