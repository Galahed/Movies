import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "../../Database"

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {movies:[]}
  }

  componentWillMount() {
    firebase.firestore().collection("movies").onSnapshot(this.update.bind(this))
  }

  useStyles(){
    return makeStyles(theme => ({
      root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
      table: {
        minWidth: 650,
      },
    }));
  }

  update(collection) {
    const movies = []
    collection.docs.forEach(d => movies.push({id: d.id, ...d.data()}))
    this.setState({movies})
  }

  render() {
    const {Column, HeaderCell, Cell, Pagination} = Table
    const classes = this.useStyles();
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Movie name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Director</TableCell>
              <TableCell align="right">Stars</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.movies.map(row => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.director}</TableCell>
                <TableCell align="right">{row.stars}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}
export default Grid