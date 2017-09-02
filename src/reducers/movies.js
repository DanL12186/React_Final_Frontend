export default function manageMovieRatings(state = {
    movies: []
  }, action) {
  switch (action.type) {
    case 'UPDATE_MOVIE_RATING':
      const filterOutCurrentMovie = state.movies.filter(m => m.id !== action.movie.id)
    return Object.assign({}, state, {
      movies: filterOutCurrentMovie.concat(action.movie)
     });
    case 'ADD_MOVIES':
     return Object.assign({}, state, {
        movies: action.movies
      });
    default:
      return state;
  }
}
