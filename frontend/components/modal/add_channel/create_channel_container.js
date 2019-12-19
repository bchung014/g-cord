import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { closeModal } from '../../../actions/modal_actions';
import { createChannel, clearChannelErrors } from '../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  formType: 'create',
  channel: {
    name: '',
    server_id: ownProps.match.params.serverId
  },
  errors: state.errors.channel
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  submitRequest: channel => dispatch(createChannel(channel)),
  clearChannelErrors: () => dispatch(clearChannelErrors())
});

export default withRouter(connect(msp, mdp)(ChannelForm));