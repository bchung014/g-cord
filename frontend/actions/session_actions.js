import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


// Action Thunk Creators

export const register = user => dispatch => (
  SessionAPIUtil.register(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const fetchServerMembers = serverId => dispatch => (
  SessionAPIUtil.fetchServerMembers(serverId)
    .then(users => dispatch(receiveUsers(users)))
);