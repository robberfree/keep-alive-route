import React from "react";
import List from "../List";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import Detail from "../Detail";
import KeepAliveRoute from "keep-alive-route";

export default function Application() {
  return (
    <div>
      <Router>
        <KeepAliveRoute path="/list-keep-alive-route">
          <List></List>
        </KeepAliveRoute>
        <Route path="/" exact>
          <Link to="/list">list page with Route</Link>
          <hr />
          <Link to="/list-keep-alive-route">list page with KeepAliveRoute</Link>
        </Route>
        <Route path="/list">
          <List></List>
        </Route>

        <Route path="/detail/:id">
          <Detail></Detail>
        </Route>
      </Router>
    </div>
  );
}
