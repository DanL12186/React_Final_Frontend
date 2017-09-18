import React, {Component} from 'react';
import { connect } from 'react-redux'

import Movies from './Movies'

class Watchlist extends Component {

render() {
  debugger
  return (

    <div className="App">
      <h1>.</h1>
      <h1>Welcome to Your Watchlist</h1>

      <Movies filteredMovies={this.props.movies.filter(movie => parseInt(movie.list_id) > 0)}/>


    </div>
  )
}
}

const mapStateToProps = state => {
return {
 movies: state.movies.movies
}
}

export default connect(mapStateToProps, null)(Watchlist)
