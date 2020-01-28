import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar';
import InlineForm from './components/InlineForm';

const App = () => {
  return (
    <div className="container py-5">
      <Navbar>
        <InlineForm
          inputName="q"
          buttonText="Search"
          onSubmit={search}
        />
      </Navbar>

      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          {routes.map(({ exact, path, component }, i) => (
            <Route
              key={i}
              exact={exact}
              path={path}
              component={lazy(() => import(`./pages/${component}`))}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
