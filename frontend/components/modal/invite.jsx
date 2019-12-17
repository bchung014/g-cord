import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Invite extends React.Component {

  render() {
    const { server } = this.props;

    return(
      <h1>{server.invite_code}</h1>
    );
  }

}

const msp = (state, ownProps) => {
  const serverId = parseInt(ownProps.history.location.pathname.split('/channels/').pop());
  return {
    server: state.entities.servers[serverId]
  };
}

const mdp = dispatch => {

}

export default withRouter(connect(msp, null)(Invite));