import React from "react";
import MessageForm from "../chat_room/message_form";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchMessages } from '../../actions/message_actions';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    
    this.subscription = null;
    this.currentChannelId = null;
    
    this.state = { messages: [] };

    this.bottom = React.createRef();
  }

  componentDidMount() {
    console.log(this.props.channels);

    if (this.props.newChannel) {
      this.currentChannelId = this.props.newChannel.id;

      this.props.fetchMessages(this.currentChannelId);

      console.log('here');


      // this.createNewSubscription(this.currentChannelId);
    }
  }

  createNewSubscription(channelId) {
    this.subscription = App.cable.subscriptions.create(
      { channel: "ChatChannel", id: channelId },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function (data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  // componentDidUpdate() {
  //   // If an existing subscription exists and the user changes channels within the same server,
  //   // the current subscription will be unsubscribed and a new subscription of the new channel is made

  //   if (this.subscription &&
  //       this.currentChannelId !== this.props.newChannel.id) {
  //     this.currentChannelId = this.props.newChannel.id;

  //     this.subscription.unsubscribe();
  //     this.createNewSubscription(this.currentChannelId);
  //   }
  // }

  // componentWillUnmount() {
  //   this.subscription.unsubscribe();
  // }


  // componentDidUpdate() {
  //   this.bottom.current.scrollIntoView();
  // }

  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li key={idx}>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });

    return (
      <div className="chatroom-container">
        <header className='chatroom-header'>
          <i className="fas fa-hashtag"></i>
          <p>ChatRoom Header</p>
        </header>

        <div className='chatroom-message-container'>
          {messageList}
        </div>

        <MessageForm />
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId;

  return (
    {
      newChannel: state.entities.channels[channelId],
      channels: state.entities.channels
    }
  );
};

const mdp = dispatch => ({
  fetchMessages: channel => dispatch(fetchMessages(channel)),
})

export default withRouter(connect(msp, mdp)(ChatRoom));