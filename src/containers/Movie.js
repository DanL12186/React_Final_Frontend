import React from 'react'

const clickMe = (movie) => {
  console.log(movie)

}

const Movie = ({movie}) => (
  <div>
    <h3>{movie.title}</h3>
    <p>Year: {movie.year}</p>
    <p>User Rating: {movie.rating} Stars</p>
    <p>MPAA Rating: {movie.mpaa}</p>
    <p>Number of Votes: {movie.votes}</p>

    <button onClick={() => clickMe(movie)}>Click</button>
    <br/>

  </div>

)

export default Movie
