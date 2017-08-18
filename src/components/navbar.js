import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>  {
  return (
    <div className="App">
      <nav className="uk-navbar fixed">
        <div className="uk-navbar-flip">
          <ul className="uk-navbar-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/new">Add Movie</NavLink></li>
            <li><NavLink to="/topfive">Top Movies</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
