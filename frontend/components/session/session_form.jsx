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

  inputGenerator(field) {
    const { errors } = this.props;
    const inputType = field === 'username' ? 'text' : field;

    if (errors[field]) {
      return(
        <>
          <div className='session-input-header-errors'>
            <span>{field.toUpperCase()}</span>
            <span className='session-errors'>- &nbsp;{errors[field]}</span>
          </div>
          <input
            className='session-input-errors'
            type={inputType}
            value={this.state.user[field]}
            onChange={this.update(field)} />
        </>
      );
    } else {
      return (
        <>
          <div>
            <span>{field.toUpperCase()}</span>
          </div>
          <input
            className='session-input'
            type={inputType}
            value={this.state.user[field]}
            onChange={this.update(field)} />
        </>
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

    const emailInput = this.inputGenerator('email');
    const userInput = this.inputGenerator('username');
    const passwordInput = this.inputGenerator('password');

    const userField = formType === 'Login' ? '' :    
      <label>
        {userInput}
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
            {emailInput}
          </label>

          {userField}

          <label>
            {passwordInput}
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