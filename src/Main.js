import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import App from "./App";
  import Transactions from "./Transactions";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/app">Calculator</NavLink></li>
            <li><NavLink to="/transactions">Transactions</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/app" component={App}/>
            <Route path="/transactions" component={Transactions}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;