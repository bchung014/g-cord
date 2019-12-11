import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {};
    case RECEIVE_ERRORS:
      let allErrors = {};
      action.errors.forEach((error) => {
        if (error.includes('Email')) {
          Object.assign(allErrors, { email: error });
        } else if (error.includes('Username')) {
          Object.assign(allErrors, { username: error });
        } else if (error.includes('Password')) {
          Object.assign(allErrors, { password: error });
        } else if (error.includes('credentials')) {
          Object.assign(allErrors, { username: '-' });
        }
      });
      return allErrors;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default sessionErrorsReducer;