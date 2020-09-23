import React from "react";

import HomePage from "./HomePage";
import SongDetail from "./SongDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route
              path="/song/:title/:artist"
              exact
              component={SongDetail}
            ></Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
