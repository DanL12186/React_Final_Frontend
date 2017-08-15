import React from 'react'

const clickMe = (movie) => {
  console.log(movie)

    // fetch(`https://www.google.com/search?q=${movie.title}+%28Movie%29`)
    //   .then(response=> console.log(response))
//        function(imageSearch) {
//     const image = $("#uid_0") || $("#uid_2")
//     charDiv.append(`<img>${imageSearch.image}</img>`)
// })
}


function handleSubmit(event) {
  event.preventDefault();
  console.log(event)
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
