export default function manageMovieRatings(state = {
    movies: []
  }, action) {
  switch (action.type) {
    case 'ADD_RATING':
      // const rating = Object.assign({}, action.movie, {id: id});
      // // return { movies: state.movies.concat(restaurant) }
     case 'ADD_MOVIES':
     return Object.assign({}, state, {
        movies: action.movies
      });
    default:
      return state;
  }
}
