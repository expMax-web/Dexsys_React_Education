import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ThemeContext } from "./context";
import { useThemeState } from "./hooks/useThemeState";

const App: React.FC = () => {
  const [isDark, setIsDark] = useThemeState();
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/character/:id" component={CharacterPage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
};

export default withRouter(App);
