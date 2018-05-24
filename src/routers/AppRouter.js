import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/create" exact component={AddExpensePage}/>
          <Route path="/edit/:id" exact component={EditExpensePage}/>
          <Route path="/help" exact component={HelpPage}/>
          <Route path="/" exact component={ExpenseDashboardPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;