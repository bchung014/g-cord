import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { createServer, clearServerErrors } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import ServerForm from './server_form';

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