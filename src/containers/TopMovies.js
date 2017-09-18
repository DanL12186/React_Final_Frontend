import React, {Component} from 'react';
import { connect } from 'react-redux'
import Movies from './Movies'

class topMovies extends Component {

render() {
  return (

  <div>
    <h1>.</h1>
    <h1>Top Movies</h1>
      <Movies filteredMovies={this.props.movies.filter(movie => movie.rating > 4)}/>
  </div>
    )
  }
}

const mapStateToProps = state => {
 return {
   movies: state.movies.movies
 }
}

export default connect(mapStateToProps, null)(topMovies)
