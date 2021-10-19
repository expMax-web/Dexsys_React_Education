import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import CharacterPage from "./pages/CharacterPage";
import { Home } from "./pages/Home";
import { ThemeContext } from "./context";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App: React.FC = () => {
  const [isDark, setIsDark] = useLocalStorage(false, "isDark");
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/character/:id" component={CharacterPage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
};

export default withRouter(App);
