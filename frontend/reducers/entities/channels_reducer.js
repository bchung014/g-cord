import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel });
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default channelsReducer;