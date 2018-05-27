import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active" exact>Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active" exact>Help</NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  }
};

export default connect(undefined, mapDispatchToProps)(Header);