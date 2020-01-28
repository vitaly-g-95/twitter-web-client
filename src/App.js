import React, { Suspense, lazy } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import routes from './routes';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import InlineForm from './components/InlineForm';

const App = ({ history }) => {
  const search = q => {
    history.push({
      pathname: '/search',
      search: `?q=${q}`
    });
  };

  return (
    <div className="container py-5">
      <Navbar>
        <InlineForm
          inputName="q"
          buttonText="Search"
          onSubmit={search}
        />
      </Navbar>

      <Suspense fallback={<Preloader />}>
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

export default withRouter(App);
