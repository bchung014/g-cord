import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitRequest(this.state.user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  // errorGenerator(formType) {
  //   if (formType === 'Login') {
  //     this.setState({})
  //   } else {

  //   }
  // }

  render() {
    const { formType, errors } = this.props;

    // const currErrors = this.errorGenerator(formType);
    // console.log(currErrors);

    const welcomeText = formType === 'Login' ?
      <div className='session-welcome'>
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again!</p>
      </div> :
      <div className='session-welcome'>
        <h1>Create an account</h1>
      </div>

    const userField = formType === 'Login' ? '' :    
      <label>USERNAME {errors.username}
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
          <label>EMAIL {errors.email}
            <input
              className='session-input'
              type="email"
              value={this.state.user.email}
              onChange={this.update('email')}/>
          </label>

          {userField}

          <label>PASSWORD {errors.password}
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