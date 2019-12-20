import React from "react";
import MessageForm from "../chat_room/message_form";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidUpdate() {
    const { currentChannel, currentUserId } = this.props;

    App.cable.subscriptions.create(
      { channel: "ChatChannel", 
        channelId: currentChannel.id,
        currentUserId },
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
  //   this.bottom.current.scrollIntoView();
  // }

  render() {
    const { currentChannel } = this.props;
    let chatRoomHeader;

    if (currentChannel) chatRoomHeader = <p>{currentChannel.name}</p>

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
          {chatRoomHeader}
        </header>

        <div className='chatroom-message-container'>
          {messageList}
        </div>
        
        <MessageForm />
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  currentChannel: state.entities.channels[ownProps.match.params.channelId]
});

const mdp = dispatch => {
}

export default withRouter(connect(msp, null)(ChatRoom));