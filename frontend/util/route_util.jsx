import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/activity" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

const msp = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protected));