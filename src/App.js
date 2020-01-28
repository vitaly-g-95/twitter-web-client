import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar';
import InlineForm from './components/InlineForm';

function App() {
  return (
    <Router>
      <div className="container py-5">
        <Navbar>
          <InlineForm
            inputName="q"
            buttonText="Search"
          />
        </Navbar>

        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            {routes.map(({ exact, path, component }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                component={lazy(() => import(`./pages/${component}`))}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
