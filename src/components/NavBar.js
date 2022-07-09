import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class NavBar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-2" to="/">NewsPage</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            
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
}

export default NavBar
