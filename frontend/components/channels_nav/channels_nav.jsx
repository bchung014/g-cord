import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import ChannelsNavItem from './channels_nav_item';
import { openModal } from '../../actions/modal_actions';

class ChannelsNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentServerId: this.props.currentServerId
    };
  }

  componentDidMount() {
    this.props.fetchChannels(this.state.currentServerId);
  }

  componentDidUpdate(prevProps, prevState) {
    const currChannelId = this.props.match.params.channelId;
    const prevChannelId = prevProps.match.params.channelId;

    if (prevChannelId !== currChannelId) {
      this.props.fetchChannels(currChannelId);
    }
  }

  render() {
    const { channels } = this.props;
    const channelLis = channels.map((channel, idx) => {
      return (
        <ChannelsNavItem key={idx} channel={channel}/>
      );
    });
    const { openModal } = this.props;
    
    return (
      <div>
        <div className='channels-text-container'>
          <header className='channels-text-header'>
            <div className='channels-text-header-title'>
              <i className="fas fa-chevron-right"></i>
              Talk that 'ish
            </div>
            
            <div
              onClick={() => openModal('create_channel')} 
              className='channels-text-header-button'>
              <i className="fas fa-plus"></i>
            </div>
          </header>

          <ul className='channels-nav-container'>
            {channelLis}
          </ul>
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  currentServerId: parseInt(ownProps.match.params.channelId),
  channels: Object.values(state.entities.channels)
});

const mdp = dispatch => ({
  fetchChannels: serverId => dispatch(fetchChannels(serverId)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(ChannelsNav));