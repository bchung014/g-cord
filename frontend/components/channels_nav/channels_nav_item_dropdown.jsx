import React from 'react';
import { connect } from 'react-redux';

class ChannelsNavItemDropdown extends React.Component {

  render() {
    return(
      <ul className='item-dropdown-container'>
        <li>
          Edit
          <i className="fas fa-edit"></i>
        </li>
        <li>
          Delete
          <i className="fas fa-trash-alt"></i>
        </li>
      </ul>
    );
  }
}

const msp = state => {
}

const mdp = dispatch => {
}

export default connect(null, null)(ChannelsNavItemDropdown);