import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MessageList extends React.Component {


  render() {
    return (
      <div className='chatroom-message-container'>
        <h1> this is temp messages </h1>
      </div>
    )
  }

}

const msp = (state, ownProps) => ({
  newChannelId: ownProps.match.params.channelId,
  channels: state.entities.channels
});

const mdp = dispatch => ({
  fetchMessages: channel => dispatch(fetchMessages(channel)),
});

export default withRouter(connect(null, null)(MessageList));