import React from 'react'
import {Table} from 'rsuite'
import firebase from "../../Database"
import 'rsuite/dist/styles/rsuite.min.css'

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  componentWillMount(){
    firebase.firestore().collection("movies").onSnapshot(this.update.bind(this))
  }
  
  update(collection){
    const movies=[]
    collection.docs.forEach(d=>movies.push({id:d.id,...d.data()}))
    this.setState({movies})
  }

  render() {
    const { Column, HeaderCell, Cell, Pagination } = Table
    return (
      <div>
        <Table
          virtualized
          wordWrap
          height={400}
          data={this.state.movies}
          onRowClick={data => {
            console.log(data);
          }}
        >
          <Column width={200} fixed>
            <HeaderCell>Movie Name</HeaderCell>
            <Cell dataKey="name" />
          </Column>

          <Column width={130}>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" />
          </Column>

          <Column width={130}>
            <HeaderCell>Year</HeaderCell>
            <Cell dataKey="year" />
          </Column>

          <Column width={200}>
            <HeaderCell>Director</HeaderCell>
            <Cell dataKey="director" />
          </Column>

          <Column width={200}>
            <HeaderCell>Stars</HeaderCell>
            <Cell dataKey="stars" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Description</HeaderCell>
            <Cell dataKey="description" />
          </Column>
        </Table>
      </div>
    );
  }
}
export default Grid