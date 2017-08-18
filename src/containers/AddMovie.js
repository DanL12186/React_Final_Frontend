import React, {Component} from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
    }
  }

  render() {
    return (
      <div>Add Movie</div>
    )
  }
}
