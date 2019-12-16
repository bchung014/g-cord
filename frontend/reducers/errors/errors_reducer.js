import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import serverErrorsReducer from './server_errors_reducers';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  server: serverErrorsReducer
});

export default errorsReducer;