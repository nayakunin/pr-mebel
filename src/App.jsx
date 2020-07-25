import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
