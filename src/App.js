import React, { Component } from 'react'
import { Link,Route,BrowserRouter } from "react-router-dom"
import Rgrid from './RsuiteJSComponents/Grid'
import Bgrid from './BootstrapComponents/Grid'
import Mgrid from './MaterialUiComponents/Grid'
import Main from './Main/index'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Main}/>
          <Route path="/rsuite" component={Rgrid}/>
          <Route path="/bootstrap" component={Bgrid}/>
          <Route path="/materialui" component={Mgrid}/>
        </div>
      </BrowserRouter>


  );
  }
}

export default App;
