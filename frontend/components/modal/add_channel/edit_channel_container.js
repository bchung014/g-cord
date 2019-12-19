import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';
import { editChannel ,clearChannelErrors } from '../../../actions/channel_actions';

const msp = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId;

  return {
    formType: 'edit',
    channel: state.entities.channels[channelId],
    errors: state.errors.channel
  };
};

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  submitRequest: channel => dispatch(editChannel(channel)),
  clearChannelErrors: () => dispatch(clearChannelErrors())
});

export default withRouter(connect(msp, mdp)(ChannelForm));