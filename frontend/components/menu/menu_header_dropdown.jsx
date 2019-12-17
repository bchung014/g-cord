import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { leaveServer, fetchServers } from '../../actions/server_actions';

class MenuHeaderDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      currentServerId: this.props.currentServerId
    }
  }


  leaveServer() {
    const { leaveServer, fetchServers, history } = this.props;

    leaveServer(this.state.currentServerId)
      .then(() => {
        history.push('@me');
        fetchServers();
      });
  }

  render() {
    const { currentUser, currentServerId } = this.state;
    // debugger;

    const dropdownOptions = currentUser.admined_servers.includes(currentServerId) ?
      <>
        <li>Edit</li>
        <li>Delete</li>
      </> :
      <li onClick={
        e => {
          this.leaveServer();
          // e.stopPropagation();
        }}>
        Leave
      </li>

    return (
      <ul className='menu-header-dropdown'>
        {dropdownOptions}
      </ul>
    );
  }
}


const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  currentServerId: parseInt(ownProps.match.params.channelId)
});

const mdp = dispatch => ({
  leaveServer: serverId => dispatch(leaveServer(serverId)),
  fetchServers: () => dispatch(fetchServers())
});

export default withRouter(connect(msp, mdp)(MenuHeaderDropdown));