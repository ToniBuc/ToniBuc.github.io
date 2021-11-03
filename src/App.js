import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './comps/NavBar';
import Home from './comps/Home';
import Portfolio from './comps/Portfolio';
import './resources/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
