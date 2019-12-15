import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import RegisterFormContainer from './session/register_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashContainer from './splash/splash_container';
import ChannelsContainer from './channels/channels_container'
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <ModalContainer />

    <Switch>
      <Route exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/register' component={RegisterFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path='/channels/@me' component={ChannelsContainer} /> 
    </Switch>
  </div>
  
);

export default App;