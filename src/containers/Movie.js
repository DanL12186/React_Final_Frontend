import React, { Component } from 'react'

class Movie extends Component {
  constructor(props) {
    super(props)
  }

   //persist likes to rails backend; reducer, redux store, etc.

   vote = (movie, input, updateVote) => {
     let rating = (movie.rating * movie.votes + input) / (movie.votes + 1)

     const updatedMovie = movie
     updatedMovie.rating = rating
     updatedMovie.votes++

     rating = rating.toString().replace('.', '_')

     fetch(`http://localhost:3001/api/movies/${movie.id}/votes/${rating}`, {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       }
     }).then(response => {
       if (response.status === 204) {
         updateVote(updatedMovie)
       }
     })
   }

   roundRatings = rating => {
     return Math.round(rating * 100) / 100
   }

   callApi = () => {
     console.log('a')
     fetch('http://localhost:3001/api/movies', {
       method: 'GET',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       }
     })
       .then(response => {
         console.log('b')
         return response.json()
       })
       .then(response => console.log('c', response))
     console.log('d')
   }

   watchlist = (movie, addToWatchlist) => {
     let watchListId = 1

     const updatedMovie = movie

     updatedMovie.list_id = watchListId

     watchListId = watchListId.toString()

     fetch(`http://localhost:3001/api/movies/${movie.id}/watchlist/`, {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       }
     }).then(response => {
       if (response.status === 204) {
         addToWatchlist(updatedMovie)
       }
     })
   }

  render() {
   return (
     <div>
       <br />
       <h3>{this.props.movie.title}</h3>
       <p>Year: {this.props.movie.year}</p>
       <p>User Rating: {this.roundRatings(this.props.movie.rating)} Stars</p>
       <p>MPAA Rating: {this.props.movie.mpaa}</p>
       <p>Number of Votes: {this.props.movie.votes}</p>
       <button onClick={() => this.watchlist(this.props.movie, this.props.updateVote)}>Add to Watchlist</button>
       <br />
       <button onClick={() => this.props.updateLike(this.props.movie)}>Like!</button>
       <button onClick={this.callApi}>Call Api!</button>
       <h4>This movie has been liked {this.props.movie.likes} times.</h4>
       <h4>Rate Me</h4>
       <button onClick={() => this.vote(this.props.movie, 1, this.props.updateVote)}>1</button>
       <button onClick={() => this.vote(this.props.movie, 2, this.props.updateVote)}>2</button>
       <button onClick={() => this.vote(this.props.movie, 3, this.props.updateVote)}>3</button>
       <button onClick={() => this.vote(this.props.movie, 4, this.props.updateVote)}>4</button>
       <button onClick={() => this.vote(this.props.movie, 5, this.props.updateVote)}>5</button>
     </div>
   )
  }
}

export default Movie
