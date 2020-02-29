import React from 'react';
import { connect } from 'react-redux';

class MessageListItem extends React.Component {

  render() {
    return (
      <li className='message-item'>
        {this.props.message.body}   
      </li>
    )
  }

}

// const msp = (state, ownProps) => ({
//   messages: Object.values(state.entities.messages)
// });

export default connect(null, null)(MessageListItem);