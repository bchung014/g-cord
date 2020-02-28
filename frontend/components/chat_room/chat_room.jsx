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
        // received: data => {
        //   this.setState({
        //     messages: this.state.messages.concat(data.message)
        //   });
        // },
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

      //  this.bottom.current.scrollIntoView();
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }


  // componentDidUpdate() {
 
  // }

  render() {
    return (
      <div className="chatroom-container">
        <header className='chatroom-header'>
          <i className="fas fa-hashtag"></i>
          <p>ChatRoom Header</p>
        </header>
        
        <MessageList />
        <MessageForm />
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  newChannelId: ownProps.match.params.channelId
});

const mdp = dispatch => ({
});

export default withRouter(connect(msp, null)(ChatRoom));