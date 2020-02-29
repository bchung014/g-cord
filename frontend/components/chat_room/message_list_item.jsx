import React from 'react';
import { connect } from 'react-redux';

class MessageListItem extends React.Component {

  render() {
    const { message, user } = this.props;
    let username;

    if (user) username = user.username;

    return (
      <li className='message-item'>
        {username} -- {message.body}
      </li>
    )
  }

}

const msp = (state, ownProps) => ({
  user: state.entities.users[ownProps.message.author_id]
});

export default connect(msp, null)(MessageListItem);