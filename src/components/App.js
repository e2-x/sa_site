import React from 'react';
import logo_v2 from '../img/logo_v2.png';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import '../style/App.css';

import Nav from './nav'
import About from './about'
import Work from './work'

function App() {
  return (
    <HashRouter>
      <div>
          <Nav />
          <div className="content">
          <Route exact path="/" component={About}/>
          <Route path="/work" component={Work}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
