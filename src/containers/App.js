import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import logo from '../logo.svg';
import './App.css';
import Movies from './Movies'
import AddMovie from './AddMovie'
import TopMovies from './TopMovies'
import Home from './Home'
import Navbar from '../components/navbar'
import uikit from '../uikit.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import {addMovies, deleteMovies} from './reducers/movies'

class App extends Component {
  constructor(props) {
  super(props)
}

  componentDidMount() {
    fetch('http://localhost:3001/api/movies')// || fetch ("localhost:3000/api/movies")
      .then(response => response.json())
      .then(movies => this.props.movies(movies))
  }

  render() {
    return (

      <BrowserRouter>
       <div className="App">
         <Navbar />
         <p><img src={logo} className="App-logo" height="42" alt="My logo"/></p>
       </div>
     </BrowserRouter>
    );
  }
}

//mapDispatchToProps
//dispatch => addMovies

export default App
