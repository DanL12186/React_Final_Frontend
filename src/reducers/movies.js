export default function manageMovieRatings(state = {
    movies: []
  }, action) {
  switch (action.type) {
    case 'UPDATE_MOVIE_RATING':
      const filterOutCurrentMovie = state.movies.filter(mov => mov.id !== action.movie.id)
    return Object.assign({}, state, {
      movies: filterOutCurrentMovie.concat(action.movie)
     });
    case 'ADD_MOVIES':
     return Object.assign({}, state, {
        movies: action.movies
      });
    case 'ADD_TO_WATCHLIST':
      const movie = state.movies.filter(movie => movie.id === action.movie.id)
      movie[0].list_id = "1"
      const allMovies = state.movies.filter(movie => movie.id !== action.movie.id)
      return Object.assign({}, state, {
        movies: [...allMovies, ...movie]
       });
    default:
      return state;
  }
}
