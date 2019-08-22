import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import { Home, Detail } from './views';
import { Navbar } from './components';
import { pokemon } from './apis';

const App = () => {
  return (
    <ApolloProvider client={pokemon}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={(props) => (<Home {...props} />)} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
