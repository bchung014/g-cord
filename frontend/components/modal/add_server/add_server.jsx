import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';

const AddServer = ({ openModal }) => {
  return(
    <div className='add-server-container'>
      <header className='add-server-header'>
        <p>Where we finna go, boss?</p>
      </header>

      <main className='add-server-buttons-container'>
        <section>
          <button onClick={() => openModal('create_server')}>
            <header className='add-server-button-header'>Create</header>
            <div className='add-server-button-content'>
              Make a new spot to post up at. Don't forget your peoples.
            </div>
            <div className='add-server-button-fauxbutton create-button'>
              Make it happen
            </div>
          </button>
          
        </section>
        <section>
          <button onClick={() => openModal('join_server')}>
            <header className='add-server-button-header join-header'>Join</header>
            <div className='add-server-button-content'>
              If you got the juice, enter another neighborhood.
            </div>
            <div className='add-server-button-fauxbutton join-button'>
              Pull up
            </div>
          </button>
        </section>
      </main>
    </div>
  );

};

const msp = state => ({
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mdp)(AddServer);