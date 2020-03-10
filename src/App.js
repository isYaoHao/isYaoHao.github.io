import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { HashRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/404";
import Layout from "./layout";
function App() {
  return (
    <Paper>
      <HashRouter>
        <Switch>
          <Route path="/login" component={NotFound} />
          <Route path="/uniform-interface" />
          <Route component={Layout} />
        </Switch>
        <Layout />
      </HashRouter>
    </Paper>
  );
}

export default App;
