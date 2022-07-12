import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App=()=>{
  const [progress,setProgress] = useState(0);
    return (
        <Router>
          <NavBar/>
          <LoadingBar height={3} color='#f11946' progress={progress}/>
          <Routes>
              <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={8} category="general"/>}></Route>
              <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={8} category="business"/>}></Route>
              <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={8} category="entertainment"/>}></Route>
              <Route exact path='/health' element={<News setProgress={setProgress} key="health"  pageSize={8} category="health"/>}></Route>
              <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={8} category="sports"/>}></Route>
              <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={8} category="technology"/>}></Route>
          </Routes>
          </Router>
    )
  }

  export default App;

