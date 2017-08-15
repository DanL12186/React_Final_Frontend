import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import Movies from './Movies'

//import {addMovies, deleteMovies} from './reducers/movies'

class App extends Component {
  constructor(props) {
  super(props)

  this.state = {
    movies: [],
  }
}

  componentDidMount() {
    fetch('http://localhost:3001/api/movies')// || fetch ("localhost:3000/api/movies")
      .then(response => response.json())
      .then(movies => this.setState({movies}))
  }

  render() {
    return (
      <div className="App">
       <p><img src={logo} className="App-logo" height="42" alt="My logo"/></p>
        App Container
        <Movies movies = {this.state.movies} />
      </div>
    );
  }
}

//mapDispatchToProps
//dispatch => addMovies

export default App
