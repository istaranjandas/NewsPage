import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  state={
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
        <Router>
          <NavBar/>
          <LoadingBar height={3} color='#f11946' progress={this.state.progress}/>
          <Routes>
              <Route exact path='/' element={<News setProgress={this.setProgress} key="general" pageSize={8} category="general"/>}></Route>
              <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={8} category="business"/>}></Route>
              <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={8} category="entertainment"/>}></Route>
              <Route exact path='/health' element={<News setProgress={this.setProgress} key="health"  pageSize={8} category="health"/>}></Route>
              <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={8} category="sports"/>}></Route>
              <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={8} category="technology"/>}></Route>
          </Routes>
          </Router>
    )
  }
}

