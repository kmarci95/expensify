import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import congfigureStore from './store/configureStore';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

const store = congfigureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
