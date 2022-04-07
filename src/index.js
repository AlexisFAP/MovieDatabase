import React from 'react';
import { render } from 'react-dom';
import './index.css';

import App from './App';
import SpecificMovie from './components/SpecificMovie';
import ErrorPage from './ErrorPage';
import Favorite from './components/Favorites';
import Sesion from './components/Sesion';

import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

render(
  <React.StrictMode>
    <Router>
    <Sesion/>
      <nav className='navbar'>
        <Link className='navbar-text' to="/"> Home </Link>
        <Link className='navbar-text' to="/favorite"> Favorite Movies </Link>
      </nav>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/favorite' element={<Favorite/>}/>
        <Route path='/specific-movie/:specificMovie' element={<SpecificMovie/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

