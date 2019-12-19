import 
  { RECEIVE_CHANNELS, 
    RECEIVE_CHANNEL, 
    REMOVE_CHANNEL } from '../../actions/channel_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';


const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNELS:
      return Object.assign({}, state, action.channels);
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel });
    case REMOVE_CHANNEL:
      let prevState = merge({}, state);
      delete prevState[action.channel.id];
      return prevState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default channelsReducer;