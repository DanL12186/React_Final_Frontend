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
import Footer from '../components/footer'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import {addMovies, deleteMovies} from './reducers/movies'

export function movies(movies){
  return {
    type: 'ADD_MOVIES',
    movies
  }
}

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/movies')
      .then(response => response.json())
      .then(movies => this.props.movies(movies))
  }

  render() {
    return (
      <BrowserRouter>
       <div className="App">
         <Navbar />
         <p><img src={logo} className="App-logo" height="42" alt="My logo"/></p>
         <Switch>
           <Route exact path = "/" component={Home}/>
           <Route path = "/movies" component={Movies}/>
           <Route path = "/new" component={AddMovie}/>
           <Route path = "/topmovies" component={TopMovies}/>
         </Switch>
         <Footer />
       </div>
     </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { movies }, dispatch);
};

export default connect(null, mapDispatchToProps)(App)
