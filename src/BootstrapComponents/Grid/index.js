import React from 'react'
import firebase from "../../Database"


class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {movies:[]}
  }

  componentWillMount() {
    firebase.firestore().collection("movies").onSnapshot(this.update.bind(this))
  }

  update(collection) {
    const movies = []
    collection.docs.forEach(d => movies.push({id: d.id, ...d.data()}))
    this.setState({movies})
  }
  render() {
    return (
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Movie Name</th>
          <th scope="col">Type</th>
          <th scope="col">Year</th>
          <th scope="col">Director</th>
          <th scope="col">stars</th>
          <th scope="col">Description</th>
        </tr>
        </thead>
        <tbody>
        {this.state.movies.map(m=>
          <tr>
            <th scope="row">{m.name}</th>
            <td>{m.type}</td>
            <td>{m.year}</td>
            <td>{m.director}</td>
            <td>{m.stars}</td>
            <td>{m.description}</td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}
export default Grid