import { RECEIVE_CURRENT_USER, RECEIVE_USERS, LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      let newState = Object.assign({}, state);

      Object.keys(action.users).forEach(userId => {
        newState[userId] = action.users[userId];
      });

      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;