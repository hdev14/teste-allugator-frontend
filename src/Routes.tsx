import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Load from './components/Load';

const Home = React.lazy(() => import('./pages/Home'));

const Routes = () => (
  <Suspense fallback={<Load />}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Suspense>
);

export default Routes;
