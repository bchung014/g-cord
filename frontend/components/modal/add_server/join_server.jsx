import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';

const JoinServer = ({ openModal }) => {

  return (
    <div className='add-server-container'>
      <header className='join-server-header'>
        <p>Join a server</p>
      </header>

      <div className='join-server-blurb'>
        <p>Whose block we mobbin'? Drop the addy below.</p>
        <p>The invite'll look something look this:</p>
      </div>

      <div className='join-server-sample-invite'>
        <p>PG6YkQ</p>
      </div>

      <div className='join-server-input-container'>
        <input type="text"/>
        <p>Enter an invite</p>
      </div>

      <div className='join-server-footer-container'>
        <div className='create-server-footer'>
          <div onClick={() => openModal('add_server')} className='create-server-back'>
            <i className="fas fa-arrow-left create-server-icon"></i>
            Back</div>
          <div className='join-server-button'>Join</div>
        </div>
      </div>
    </div>
  );
};

const msp = state => ({
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mdp)(JoinServer);