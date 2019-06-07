import React from "react";
import ReactDOM from "react-dom";
//npm install --save history
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";


import Public from './layouts/Public/Public.jsx';
import Private from './layouts/Private/Private.jsx';

import './assets/css/index.css';


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/public" render={props => <Public {...props} />} />
      <Route path="/private" render={props => <Private {...props} />} />
      <Redirect from="/" to="/public/Inicio" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
