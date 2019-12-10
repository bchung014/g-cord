import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
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
  submitRequest: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);