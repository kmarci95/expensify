import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => { //rename, other stuff not destructured
  return (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to="/dashboard"/>
        )
        : (
          <Component {...props}/>
        )
    )}/>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid
  }
};

export default connect(mapStateToProps)(PublicRoute);