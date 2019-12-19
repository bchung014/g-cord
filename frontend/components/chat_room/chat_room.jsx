import React from "react";
import MessageForm from "../chat_room/message_form";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
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

export default ChatRoom;