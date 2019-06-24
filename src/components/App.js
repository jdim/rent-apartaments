import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import SiteNavAtop from './SiteNavAtop';
import Guides from './Guides';
import Ideas from './Ideas';
import NotFound from './NotFound';
import Rent from './Rent';
import SiteFooter from './SiteFooter';

const App = () => {
  return (
    <Router>
      <SiteNavAtop />
      <main>
        <Switch>
          <Route path="/rent" exact component={Rent} />
          <Route path="/guides" exact component={Guides} />
          <Route path="/ideas" exact component={Ideas} />
          <Route path="/" exact render={props => <Redirect to="/rent" />} />

          <Route component={NotFound} />
        </Switch>
      </main>
      <SiteFooter />
    </Router>
  );
};

export default App;
