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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
      </Switch>
    </>
  );
}

export default App;
