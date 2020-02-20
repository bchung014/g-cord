import React from "react";
import MessageForm from "../chat_room/message_form";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    const { currentChannelId } = this.props;

    App.cable.subscriptions.create(
      { 
        channel: "ChatChannel",
        id: currentChannelId
      },
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
  currentChannelId: ownProps.match.params.channelId
});

// const mdp = dispatch => {}

export default withRouter(connect(msp, null)(ChatRoom));