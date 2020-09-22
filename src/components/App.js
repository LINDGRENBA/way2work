import React from 'react';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <SurveyControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
