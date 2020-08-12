import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Catalog } from './pages/Catalog/Catalog';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* TODO Check if exact is needed */}
        <Route exact path="/catalog">
          <Catalog />
        </Route>
      </Switch>
    </>
  );
}

export default App;
