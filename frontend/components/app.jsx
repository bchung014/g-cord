import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import RegisterFormContainer from './session/register_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashContainer from './splash/splash_container';
import MainContainer from './main/main_container';

const App = () => (
  <div>
    <Route exact path='/' component={SplashContainer} />
    <AuthRoute exact path='/register' component={RegisterFormContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <ProtectedRoute exact path='/main' component={MainContainer} /> 
  </div>
);

export default App;