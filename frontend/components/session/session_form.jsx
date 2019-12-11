import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        user: this.props.user,
        errors: this.props.errors
      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitRequest(this.state.user);
  }

  update(field) {
    return (e) => {
      this.setState(
        { 
          user: Object.assign({}, this.state.user, { [field]: e.currentTarget.value })
        }
      );
    };
  }

  errorGenerator(field) {
    const { errors } = this.props;

    if (errors[field]) {
      return(
        <div className='session-input-header-errors'>
          <span>{field.toUpperCase()}</span>
          <span className='session-errors'>- &nbsp;{errors[field]}</span>
        </div>
      );
    } else {
      return (
        <div>
          <span>{field.toUpperCase()}</span>
        </div>
      );
    }
  }

  render() {
    const { formType } = this.props;

    const welcomeText = formType === 'Login' ?
      <div className='session-welcome'>
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again!</p>
      </div> :
      <div className='session-welcome'>
        <h1>Create an account</h1>
      </div>

    const emailErrors = this.errorGenerator('email');
    const userErrors = this.errorGenerator('username');
    const passwordErrors = this.errorGenerator('password');

    const userField = formType === 'Login' ? '' :    
      <label>
        {userErrors}
        <input
          className='session-input'
          type="text"
          value={this.state.user.username}
          onChange={this.update('username')}/>
      </label>

    const reverseLink = formType === 'Register' ?
      <div className='session-link'>
        <Link to='/login'>Already have an account?</Link>
      </div> :
      <div className='session-link'>
        <p>Need an account?</p>
        <Link to='/register'>Register</Link>
      </div>

    return(
      <div className='session-form-container'>
        {welcomeText}

        <form className='session-form' onSubmit={this.handleSubmit}>
          <label>
            {emailErrors}
            <input
              className='session-input'
              type="email"
              value={this.state.user.email}
              onChange={this.update('email')}/>
          </label>

          {userField}

          <label>
            {passwordErrors}
            <input
              className='session-input'
              type="password"
              value={this.state.user.password}
              onChange={this.update('password')}/>
          </label>

          <label>
            <input className="session-submit" type="submit" value={formType}/>
            {reverseLink}
          </label>
          
        </form>

      </div>
    );
  }
}