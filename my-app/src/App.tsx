import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import CharacterPage from "./pages/CharacterPage";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/character" component={CharacterPage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default withRouter(App);
