import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Movie from './Movie'

class Movies extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Movies</h1>
        { this.props.movies.map(movie =>
          <div key={movie.id}><Movie movie={movie}/></div>
        )}
      </div>
     )
   }
 }
