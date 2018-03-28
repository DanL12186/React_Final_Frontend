export function addMovies(movies) {
  return {
    type: 'ADD_MOVIES',
    movies
  }
}

export function updateMovieRating(movie) {
  return {
    type: 'UPDATE_MOVIE_RATING_OR_LIKE',
    movie
  }
}

export function updateMovieLike(movie) {
  return {
    type: 'UPDATE_MOVIE_RATING_OR_LIKE',
    movie
  }
}

export function addMovieToWatchList(movie) {
  return {
    type: 'ADD_TO_WATCHLIST',
    movie
  }
}
