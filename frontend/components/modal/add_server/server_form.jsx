import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { createServer, clearServerErrors } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        server: this.props.server,
        serverPreview: this.props.serverPreview,
      };    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearServerErrors();
  }

  handleSubmit(e) {
    e.preventDefault();

    const { submitRequest, closeModal, history } = this.props;

    submitRequest(this.state.server)
      .then(({ server }) => {
        closeModal();
        history.push(`${server.id}`);
      });

    this.forceUpdate()
  }

  update(field) {
    return (e) => {
      this.setState(
        {
          server: Object.assign({}, this.state.server, { [field]: e.currentTarget.value }),
          serverPreview: { preview: e.currentTarget.value[0] }
        }
      );
    };
  }

  render() {
    const { openModal } = this.props;

    const createServerHeader = this.props.errors.length ?
      <section>
        <p>Server name&nbsp;&nbsp;</p>
        <span>-&nbsp;&nbsp;{this.props.errors}</span>
      </section> :
      <div>
        <p>Server name</p>  
      </div>

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
              {createServerHeader}
              <input
                className='create-server-input'
                type="text"
                placeholder="Enter a server name"
                value={this.state.server['name']}
                onChange={this.update('name')} />
            </label>
          </form>

          <div>
            <button className='create-server-preview'>
              {this.state.serverPreview.preview}
            </button>
          </div>
        </main>

        <div className='create-server-footer-container'>
          <div className='create-server-footer'>
            <div onClick={() => openModal('add_server')} className='create-server-back'>
              <i className="fas fa-arrow-left create-server-icon"></i>
              Back</div>
            <div onClick={this.handleSubmit} className='create-server-button'>Create</div>
          </div>
        </div>
      </div>
    );
  }
}

const msp = (state) => ({
  formType: 'Create',
  server: {
    name: ''
  },
  serverPreview: {
    preview: ''
  },
  errors: state.errors.server
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  submitRequest: server => dispatch(createServer(server)),
  clearServerErrors: () => dispatch(clearServerErrors())
});

export default withRouter(connect(msp, mdp)(ServerForm));