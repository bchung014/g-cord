import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../actions/message_actions';
import MessageListItem from './message_list_item';

class MessageList extends React.Component {

  componentDidMount() {
    const { fetchMessages, serverId, channelId } = this.props;

    fetchMessages(serverId, channelId);
  }

  componentDidUpdate(prevProps) {
    const { fetchMessages, serverId, channelId } = this.props;

    fetchMessages(serverId, channelId);
  }

  render() {
    const { messages, channelId } = this.props;

    const messageList = messages.map((message, idx) => {

      if (channelId === message.channel_id) {
        return (
          <MessageListItem key={idx} message={message} />

          // <li key={idx}>
          //   {message}
          //   <div ref={this.bottom} />
          // </li>
        );
      }


    });

    return (
      <div className='chatroom-message-container'>
        {messageList}
      </div>
    )
  }

}

const msp = (state, ownProps) => ({
  serverId: parseInt(ownProps.match.params.serverId),
  channelId: parseInt(ownProps.match.params.channelId),
  messages: Object.values(state.entities.messages)
});

const mdp = dispatch => ({
  fetchMessages: (serverId, channelId) => dispatch(fetchMessages(serverId, channelId)),
});

export default withRouter(connect(msp, mdp)(MessageList));