import React, {Component} from 'react';
import { connect } from 'react-redux'
import Movie from './Movie'

class topMovies extends Component {
  constructor(props) {
  super(props)
}

render() {
  return (

  <div>
    <h1>Top Movies</h1>
    {this.props.movies.filter(movie => movie.rating > 4).map(movie =>
      <div key={movie.id}><Movie movie={movie}/></div>
    )}
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
