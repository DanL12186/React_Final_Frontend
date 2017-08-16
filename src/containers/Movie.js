import React from 'react'
const clickMe = (movie, rating) => {
  //console.log(movie)
  console.log(rating)

    // fetch(`https://www.google.com/search?q=${movie.title}+%28Movie%29`)
    //   .then(response=> console.log(response))
//        function(imageSearch) {
//     const image = $("#uid_0") || $("#uid_2")
//     charDiv.append(`<img>${imageSearch.image}</img>`)
// })
}


// function vote(n) { //running average
//   votes++;
//   return rating += ((n - rating)/votes);
// }


const Movie = ({movie}) => (
  <div>
    <h3>{movie.title}</h3>
    <p>Year: {movie.year}</p>
    <p>User Rating: {movie.rating} Stars</p>
    <p>MPAA Rating: {movie.mpaa}</p>
    <p>Number of Votes: {movie.votes}</p>

    <h4>Rate Me</h4>
    <button onClick={() => clickMe(movie, 1)}>1</button>
    <button onClick={() => clickMe(movie, 2)}>2</button>
    <button onClick={() => clickMe(movie, 3)}>3</button>
    <button onClick={() => clickMe(movie, 4)}>4</button>
    <button onClick={() => clickMe(movie, 5)}>5</button>
    <br/>

  </div>

)

export default Movie
