import React from 'react';

class MessageListItem extends React.Component {


  render() {
    return (
      <li>
        {this.props.message.body}
      </li>
    )
  }

}

export default MessageListItem;