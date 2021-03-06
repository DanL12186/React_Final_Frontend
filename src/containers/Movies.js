import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Movie from './Movie'
import { updateMovieLike, addMovieToWatchList, updateMovieRating, addMovies } from '../actions/movies'

class Movies extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/api/movies')
      .then(response => response.json())
      .then(movies => this.props.addMovies(movies))
  }

  updateVote = movie => {
    this.props.updateMovieRating(movie)
  }

  updateLike = movie => {
    movie.likes++

    fetch(`http://localhost:3001/api/movies/${movie.id}/`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movie: {likes: movie.likes} })

    }).then(response => {
      if (response.status === 200) {
        this.props.updateMovieLike(movie)
      }
    })
  }

  addToWatchlist = movie => {
    this.props.addMovieToWatchList(movie)
  }

  render() {
    const movies =
      this.props.filteredMovies ||
      this.props.movies.sort((a, b) => b.rating - a.rating)
    return (
      <div>
        {this.props.filteredMovies ? null : (
          <div>
            <h1>.</h1>
            <h1>Movies</h1>
          </div>
        )}
        {movies.map(movie => (
          <div key={movie.id}>
            <Movie
              movie={movie}
              updateVote={movie => this.updateVote(movie)}
              addToWatchlist={this.addToWatchlist}
              updateLike={movie => this.updateLike(movie)}
            />
          </div>
        ))}
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
    { addMovies, updateMovieRating, addMovieToWatchList, updateMovieLike },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
