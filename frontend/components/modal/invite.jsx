import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Invite extends React.Component {

  render() {
    const { server } = this.props;

    return(
      <div className='invite-container'>
        <header className='invite-header'>
          Invite friends to {server.name}
        </header>


        <input
          autoFocus
          className='invite-input' 
          type="text"
          value={server.invite_code}
          onChange={() => {}}
          />
      </div>
    );
  }

}

const msp = (state, ownProps) => {
  const serverId = ownProps.match.params.channelId;
  
  return {
    server: state.entities.servers[serverId]
  };
}

const mdp = dispatch => {

}

export default withRouter(connect(msp, null)(Invite));