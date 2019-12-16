import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { joinServer, clearServerErrors } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom';

class JoinServer extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        inviteCode: this.props.inviteCode,
      };
      
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearServerErrors();
  }

  handleSubmit(e) {
    e.preventDefault();

    const { joinServer, closeModal, history } = this.props;

    joinServer(this.state.inviteCode)
      .then(({ server }) => {
        closeModal();
        history.push(`${server.id}`);
      });
  }

  update() {
    return (e) => {
      this.props.clearServerErrors();
      this.setState(
        {
          inviteCode: e.currentTarget.value,
        }
      );
    };
  }

  render() {
    const { openModal } = this.props;

    const joinServerInput = this.props.errors.length ? 
      <div className='join-server-input-container'>
        <form>
          <input
            className='join-server-input with-errors'
            type="text"
            value={this.state.inviteCode}
            onChange={this.update()} />
          <p>Enter an invite <span>({this.props.errors})</span></p>
        </form>
      </div> :
      <div className='join-server-input-container'>
        <form>
          <input
            className='join-server-input'
            type="text"
            value={this.state.inviteCode}
            onChange={this.update()} />
          <p>Enter an invite</p>
        </form>
      </div>

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
  
        {joinServerInput}
  
        <div className='join-server-footer-container'>
          <div className='create-server-footer'>
            <div onClick={() => openModal('add_server')} className='create-server-back'>
              <i className="fas fa-arrow-left create-server-icon"></i>
              Back</div>
            <div onClick={this.handleSubmit} className='join-server-button'>Join</div>
          </div>
        </div>
      </div>
    );
  }
}

const msp = (state) => ({
  inviteCode: '',
  errors: state.errors.server
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  joinServer: inviteCode => dispatch(joinServer(inviteCode)),
  clearServerErrors: () => dispatch(clearServerErrors())
});

export default withRouter(connect(msp, mdp)(JoinServer));