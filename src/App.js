import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Detail } from './views';
import { Navbar } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact render={(props) => (<Home {...props} />)} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
