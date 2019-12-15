import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { openModal } = this.props;

    return(
      <div className='add-server-container'>
        <header className='create-server-title'>
          <p>Create your server</p>
        </header>

        <header className='create-server-blurb'>
          By creating the spot, you run the game.
          Hold it down, keep the spot crackin',
          and put your city on.  
        </header>

        <main className='create-server-input-container'>
          <form>
            <label className='create-server-label'>
              <p>Server name</p>
              <input
                className='create-server-input'
                type="text"
                placeholder="Enter a server name"
                />
            </label>
          </form>

          <div>
            <button className='create-server-preview'>
              preview
            </button>
          </div>
        </main>

        <div className='create-server-footer-container'>
          <div className='create-server-footer'>
            <div onClick={() => openModal('add_server')} className='create-server-back'>
              <i className="fas fa-arrow-left create-server-icon"></i>
              Back</div>
            <div className='create-server-button'>Create</div>
          </div>
        </div>
      </div>
    );
  }
}

const msp = state => ({
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mdp)(ServerForm);