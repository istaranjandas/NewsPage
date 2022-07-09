import React, { Component } from 'react'
export class NewsItem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card">
            <img className="card-img-top" src={imageUrl} alt={imageUrl}/>
            <div className="card-body">
                <h5 className="card-title">{title}....</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
