import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
  formType: 'Login',
  user: {
    email: '',
    password: ''
  },
  errors: state.errors.session
});

const mdp = dispatch => ({
  submitRequest: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: () => dispatch(login({ email: 'warreng@regulate.com', password: 'hunter2' }))
});

export default connect(msp, mdp)(SessionForm);