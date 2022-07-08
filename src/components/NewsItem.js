import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://i.ytimg.com/vi/WB4o2U6yEho/maxresdefault.jpg" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
