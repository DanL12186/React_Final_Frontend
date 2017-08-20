import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Movie from './Movie'

export function addMovies(movies){
  return {
    type: 'ADD_MOVIES',
    movies
  }
}

class Movies extends Component {
  constructor(props) {
  super(props)
}
  componentDidMount() {
    fetch('http://localhost:3001/api/movies')
      .then(response => response.json())
      .then(movies => this.props.addMovies(movies))
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        { this.props.movies.map(movie =>
          <div key={movie.id}><Movie movie={movie}/></div>
        )}
      </div>
     )
   }
 }

 const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
}

 const mapDispatchToProps = dispatch => {
   return bindActionCreators(
     { addMovies }, dispatch);
 };
