import React from "react";
import { Homepage } from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact={false} path="/Hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
