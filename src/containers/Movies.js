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

export function addMovieToWatchList(movie) {
  return {
    type: 'ADD_TO_WATCHLIST',
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

  addToWatchlist = (movie) => {
    this.props.addMovieToWatchList(movie)
  }

  render() {
    const movies = this.props.filteredMovies || this.props.movies.sort((a,b) => b.rating - a.rating)
    return (
      <div>
        {this.props.filteredMovies ? null :
        <div><h1>.</h1>
        <h1>Movies</h1></div>}
        { movies.map(movie =>
          <div key={movie.id}><Movie movie={movie} updateVote={(movie) => this.updateVote(movie)} addToWatchlist={this.addToWatchlist}/></div>
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
     { addMovies, updateMovieRating, addMovieToWatchList }, dispatch);
 };

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
