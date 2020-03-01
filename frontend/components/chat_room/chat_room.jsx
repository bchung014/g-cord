import React from "react";
import MessageForm from "./message_form";
import MessageList from './message_list';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    
    this.subscription = null;
    this.currentChannelId = null;
  }

  componentDidMount() {
    this.currentChannelId = this.props.newChannelId;

    this.createNewSubscription(this.currentChannelId);
  }

  createNewSubscription(channelId) {
    this.subscription = App.cable.subscriptions.create(
      { channel: "ChatChannel", id: channelId },
      {
        speak: function (data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  componentDidUpdate() {
    // If an existing subscription exists and the user changes channels within the same server,
    // the current subscription will be unsubscribed and a new subscription of the new channel is made
    if (this.subscription &&
        this.currentChannelId !== this.props.newChannelId) {
      this.currentChannelId = this.props.newChannelId;

      this.subscription.unsubscribe();
      this.createNewSubscription(this.currentChannelId);
    }
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { currChannel } = this.props;
    let channelName;

    if (currChannel) channelName = currChannel.name;

    return (
      <div className="chatroom-container">
        <header className='chatroom-header'>
          <i className="fas fa-hashtag"></i>
          <p>{channelName}</p>
        </header>
        
        <MessageList />
        <div ref={this.bottom} />
        <MessageForm />
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  newChannelId: ownProps.match.params.channelId,
  currChannel: state.entities.channels[ownProps.match.params.channelId]
});

export default withRouter(connect(msp, null)(ChatRoom));