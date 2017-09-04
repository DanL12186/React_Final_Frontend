import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Movie from './Movie'

export function addMovies(movies) {
  return {
    type: 'ADD_MOVIES',
    movies
  }
}

export function updateMovieRating(movie) {
  return {
    type: 'UPDATE_MOVIE_RATING',
    movie
  }
}

class Movies extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/api/movies')
      .then(response => response.json())
      .then(movies => this.props.addMovies(movies))
  }

  updateVote = (movie) => {
    this.props.updateMovieRating(movie)
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        { this.props.movies.map(movie =>
          <div key={movie.id}><Movie movie={movie} updateVote={(movie) => this.updateVote(movie)}/></div>
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
     { addMovies, updateMovieRating }, dispatch);
 };

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
