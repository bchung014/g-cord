import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitRequest(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    };
  }

  render() {
    const { formType } = this.props;

    const welcomeText = formType === 'Login' ?
      <header>
        <h1>Welcome back!</h1>
        <h3>We're so excited to see you again!</h3>
      </header> :
      <header>
        <h1>Create an account</h1>
      </header>

    const userField = formType === 'Login' ? '' :    
      <label>Username
        <input
          type="text"
          value={this.state.username}
          onChange={this.update('username')}/>
      </label>

    const registerLink = formType === 'Register' ? '' :
      <div>
        Need an account?
        <Link to='/register'>Register</Link>
      </div>

    return(
      <div>
        {welcomeText}

        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>

          {userField}

          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>

          <input type="submit" value={formType}/>
        </form>

        {registerLink}
      </div>
    );
  }
}