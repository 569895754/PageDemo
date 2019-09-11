import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import BaseComponent from "./BaseComponent";

import './App.css';

function App() {
  return (
      <HashRouter>
          <main>
              <Switch>
                  <Route exact path="/" component={BaseComponent} />
                  <Route path="/BaseComponent" component={BaseComponent} />
              </Switch>
          </main>
      </HashRouter>
  );
}

export default App;
