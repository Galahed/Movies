import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from "./Database"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movies:[]
    }
    this.db=firebase.firestore().collection("movies")
  }
  componentDidMount(){
    this.db.onSnapshot(this.update.bind(this));
  }
  update(collection){
    const movies=[]
    collection.docs.forEach(d=>movies.push({...d}))
    this.setState({movies})
  }
  render() {
    return (
      <div className="App">
{/*
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
*/}
        {JSON.stringify(this.state.movies)}
      </div>
    );
  }
}

export default App;
