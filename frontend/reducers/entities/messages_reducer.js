import { RECEIVE_MESSAGES } from '../../actions/message_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, action.messages);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default messagesReducer;