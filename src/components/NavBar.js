import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>{
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark" >
    <a className="navbar-brand mx-2" href="/">News Geek</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mx-4 text-light">
          <li><Link className="nav-link" to="/">General</Link></li>
          <li><Link className="nav-link" to="/business">Business</Link></li>
          <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
          <li><Link className="nav-link" to="/health">Health</Link></li>
          <li><Link className="nav-link" to="/sports">Sports</Link></li>
          <li><Link className="nav-link" to="/technology">Technology</Link></li>
          
      </ul>
    </div>
  </nav>
  </>
)
}




export default NavBar
