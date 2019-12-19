import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class ChannelsNavItemDropdown extends React.Component {
  render() {
    const { openModal } = this.props;

    return(
      <ul className='item-dropdown-container'>
        <li
          onClick={() => openModal('edit_channel')}
          className='item-dropdown-invite'>
          Edit
          <i className="fas fa-edit"></i>
        </li>
        <li
          onClick={() => openModal('delete_channel')}
          className='item-dropdown-danger'>
          Delete
          <i className="fas fa-trash-alt"></i>
        </li>
      </ul>
    );
  }
}

const msp = state => {
}

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mdp)(ChannelsNavItemDropdown);