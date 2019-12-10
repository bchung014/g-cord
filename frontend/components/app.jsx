import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import RegisterFormContainer from './session/register_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div>
    <Route exact path='/' component={SplashContainer} />
    <Route exact path='/register' component={RegisterFormContainer} />
    <Route exact path='/login' component={LoginFormContainer} />
  </div>
);

export default App;