import React, { lazy, Suspense } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { FullScreenLoader } from 'components';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));

function App() {
  return (
    <Suspense fallback={(<FullScreenLoader />)}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
      </Switch>
    </Suspense>
  );
}

export default App;
