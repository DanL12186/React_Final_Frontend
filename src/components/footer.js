import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () =>  {
  return (
    <div className="App">
      <footer className="footer">
        <div className="footer">
          <ul className="uk-navbar-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/new">Add Movie</NavLink></li>
            <li><NavLink to="/topmovies">Top Movies</NavLink></li>
          </ul>
        </div>
      </footer>
    </div>

  )
}
export default Footer;
