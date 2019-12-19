import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';
import { deleteChannel } from '../../../actions/channel_actions';

class DeleteChannel extends React.Component {
  deleteChannel() {
    const {
      deleteChannel,
      closeModal,
      channel, 
      history } = this.props;

    deleteChannel(channel)
      .then(() => {
        closeModal();
        history.push('/servers/@me');
      });
  }

  render() {
    const { channel, closeModal } = this.props;
    let sanitizedChannelName;
    
    if (channel) {
      if (channel.name.length > 20) {
        sanitizedChannelName = channel.name.slice(0, 21) + '...';
      } else {
        sanitizedChannelName = channel.name;
      }
    }

    return (
      <div className='delete-channel-container'>
        <div className='delete-channel-inner-container'>
          <p>Delete channel</p>
          <div>You tryna be out for good from <span>#{sanitizedChannelName}</span>?</div>
        </div>

        <footer className='delete-channel-footer'>
          <button
            className='delete-channel-no'
            onClick={() => closeModal()}>
            Nay
        </button>
          <button
            onClick={() => this.deleteChannel()}
            className='delete-channel-yes'>
            Let's dip
        </button>
        </footer>
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId]
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deleteChannel: channel => dispatch(deleteChannel(channel))
});

export default withRouter(connect(msp, mdp)(DeleteChannel));