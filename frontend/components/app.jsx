import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import RegisterFormContainer from './session/register_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashContainer from './splash/splash_container';
import ServersContainer from './servers/servers_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <Switch>
      <Route path='/servers/:serverId/channels/:channelId' component={ModalContainer} />
      <Route path='/servers/:serverId' component={ModalContainer} />
    </Switch>

    <Switch>
      <Route exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/register' component={RegisterFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path='/servers/:serverId' component={ServersContainer} /> 
    </Switch>
  </div>
  
);

export default App;