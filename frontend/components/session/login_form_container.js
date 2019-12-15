import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import React from 'react';
import SessionForm from './session_form';

import { openModal, closeModal } from '../../actions/modal_actions';

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
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);