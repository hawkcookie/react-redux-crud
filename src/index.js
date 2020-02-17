import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import {  Provider } from "react-redux"
import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from "./components/events_new"
import * as serviceWorker from './serviceWorker';
import reducer from "./reducers"
import thunk from "redux-thunk"

import { BrowserRouter, Switch, Route} from "react-router-dom"

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EventsIndex}>
        <EventsIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  );

serviceWorker.unregister();
