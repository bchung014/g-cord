import React from "react";
import MessageForm from "../chat_room/message_form";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    
    this.subscription = null;
    this.currentChannelId = null;
    
    this.state = { messages: [] };

    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.currentChannelId = this.props.newChannelId;

    this.createNewSubscription(this.currentChannelId);
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

  componentDidUpdate() {
    // console.log(this.currentChannelId);
    // console.log(this.props.newChannelId);

    if (this.currentChannelId !== this.props.newChannelId) {
      this.currentChannelId = this.props.newChannelId;

      this.subscription.unsubscribe();
      this.createNewSubscription(this.currentChannelId);
    }
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }


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

const msp = (state, ownProps) => ({
  newChannelId: ownProps.match.params.channelId
});

// const mdp = dispatch => {}

export default withRouter(connect(msp, null)(ChatRoom));