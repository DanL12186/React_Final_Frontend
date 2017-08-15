import React from 'react';

import Movie from './Movie'

const Movies = (props) => (

  <div>
    <h1>Movies</h1>
    { props.movies.map(movie =>
      <div key={movie.id}><Movie movie={movie}/></div>
    )}
  </div>
)

export default Movies;
