import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../actions/message_actions';
import MessageListItem from './message_list_item';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.bottom = React.createRef();

    this.numMessages = 0;
  }

  componentDidMount() {
    const { fetchMessages, serverId, channelId } = this.props;

    fetchMessages(serverId, channelId);
  }

  componentDidUpdate(prevProps) {
    const { fetchMessages, serverId, channelId } = this.props;

    fetchMessages(serverId, channelId);

    this.chatScroller(prevProps);
  }

  chatScroller(prevProps) {
    const currChannelId = this.props.match.params.channelId;
    const prevChannelId = prevProps.match.params.channelId;

    const { messages } = this.props;

    // Checks to see if the numbers of messages has changed or a channel change has occured
    if (this.numMessages != messages.length || currChannelId != prevChannelId) {
      this.numMessages = messages.length;
      this.bottom.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    const { messages, channelId } = this.props;

    const messageList = messages.map((message, idx) => {
      if (channelId === message.channel_id) {
        return (
          <MessageListItem key={idx} message={message} />
        );
      }
    });

    return (
      <div className='chatroom-message-container'>
        {messageList}
        <div ref={this.bottom} />
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