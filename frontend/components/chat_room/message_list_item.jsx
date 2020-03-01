import React from 'react';
import { connect } from 'react-redux';

class MessageListItem extends React.Component {

  render() {
    const { message, user } = this.props;
    let username, avatarLetter, time;

    if (user) {
      username = user.username;
      avatarLetter = user.username[0];
      time = new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } 

    return (
      <li className='message-item'>
        <div className='message-avatar'>
          {avatarLetter}
        </div>

        <div className='message-content'>
          <header className='message-header'>
            <div className='message-username'> {username} </div>
            <div className='message-time'> {time} </div>
          </header>

          <section className='message-text'>
            {message.body}
          </section>
        </div>
      </li>
    )
  }

}

const msp = (state, ownProps) => ({
  user: state.entities.users[ownProps.message.author_id]
});

export default connect(msp, null)(MessageListItem);