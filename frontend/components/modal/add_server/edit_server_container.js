import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { editServer, clearServerErrors } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import ServerForm from './server_form';

const msp = (state, ownProps) => {
  const serverId = parseInt(ownProps.history.location.pathname.split('/channels/').pop());

  return {
    formType: 'Edit',
    server: state.entities.servers[serverId],
    serverPreview: {
      preview: state.entities.servers[serverId].name[0]
    },
    errors: state.errors.server
  }; 
};

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  submitRequest: server => dispatch(editServer(server)),
  clearServerErrors: () => dispatch(clearServerErrors())
});

export default withRouter(connect(msp, mdp)(ServerForm));