import React, {Component} from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      year: '',
      mpaa: '',
      rating: '',
    }
  }

  handleSubmit = (event) => {
    const { history } = this.props
    fetch("http://localhost:3001/api/movies", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(res => history.push('/movies'))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Add Movie</h2>
         <br/>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <h4>Title</h4>
            <input type="text" name="title" onChange={(event) => this.handleChange(event)}/>
          </div>
           <br/>
          <div>
            <h4>Year</h4>
            <input type="text" name="year" onChange={(event) => this.handleChange(event)}/>
          </div>
            <br/>
          <div>
            <h4>MPAA Rating</h4>
            <input type="text" name="mpaa" onChange={(event) => this.handleChange(event)}/>
          </div>
           <br/>
          <div>
            <h4>User Rating</h4>
            <input type="text" name="rating" onChange={(event) => this.handleChange(event)}/>
          </div>
          <br/>
          <input type="submit" value="Add movie"/>
        </form>
      </div>
    )
  }
}

export default AddMovie;
