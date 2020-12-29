import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Problems from './Pages/Problems';
import ProblemDetails from './Pages/ProblemDetails';
import CodePage from './Pages/Coding'
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Login' exact component={Login}/>
        <Route path='/problems' exact component={Problems}/>
        <Route path='/problems/:id/:section?' exact component={ProblemDetails}/>
        <Route path='/problems/:id/language/:language' exact component={CodePage}/>
      </Switch>
    </Router>
  );
}

export default App;
