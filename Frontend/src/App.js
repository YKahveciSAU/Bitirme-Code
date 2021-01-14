import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Problems from './Pages/Problems';
import ProblemDetails from './Pages/ProblemDetails';
import CodePage from './Pages/Coding'
import Login from './Pages/Login';
import { AuthProvider } from './Context/user/context';
//import Home from './Components/Home/Home';
import Nav from './Components/Navbars/Navb';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/Login'  component={Login}/>
          <Route path='/problems/:id/language/:language' exact component={CodePage}/>
          <Route component={DefaultContainer}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
const DefaultContainer = () => (
  <>
    <Nav/>
    <>
      <Route path='/problems' exact component={Problems}/>
      <Route path='/problems/:id/:section?' exact component={ProblemDetails}/>
    </>
  </>
)
/*<Route path='/' exact component={Home}/>*/
export default App;