import React from 'react'

const vote = (movie, input, updateVote) => {
  let rating = ((movie.rating * movie.votes) + input)/(movie.votes + 1)

  const updatedMovie = movie;
  updatedMovie.rating = rating;
  updatedMovie.votes++;

  rating = rating.toString().replace(".", "_")

  fetch(`http://localhost:3001/api/movies/${movie.id}/votes/${rating}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  }).then (response => {
    if (response.status === 204) {
      updateVote(updatedMovie)
    }
  })
}

const roundRatings = (rating) => {
  return Math.round(rating * 100) / 100
}

const watchlist = (movie, addToWatchlist) => {
  let watchListId = 1

  const updatedMovie = movie;
  updatedMovie.list_id = watchListId;

  watchListId = watchListId.toString()

  fetch(`http://localhost:3001/api/movies/${movie.id}/watchlist/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    }).then (response => {
      if (response.status === 204) {
        addToWatchlist(updatedMovie)
      }
    })
   }


const Movie = (props) => (
  <div>
    <br/>
    <h3>{props.movie.title}</h3>
    <p>Year: {props.movie.year}</p>
    <p>User Rating: {roundRatings(props.movie.rating)} Stars</p>
    <p>MPAA Rating: {props.movie.mpaa}</p>
    <p>Number of Votes: {props.movie.votes}</p>
    {console.log({props})}

    <button onClick={() => watchlist(props.movie, props.updateVote)}>Add to Watchlist</button>

    <h4>Rate Me</h4>
    <button onClick={() => vote(props.movie, 1, props.updateVote)}>1</button>
    <button onClick={() => vote(props.movie, 2, props.updateVote)}>2</button>
    <button onClick={() => vote(props.movie, 3, props.updateVote)}>3</button>
    <button onClick={() => vote(props.movie, 4, props.updateVote)}>4</button>
    <button onClick={() => vote(props.movie, 5, props.updateVote)}>5</button>
  </div>
)

export default Movie
