import React from 'react'

const NewsItem=(props)=>{
    let {title,description,imageUrl,newsUrl,author,publishedAt, source} = props;
    return (
      <div >
        <div className="card">
            <img className="card-img-top" src={imageUrl} alt={imageUrl}/>
            <div className="card-body">
            <span className="translate-middle badge rounded-pill bg-success" style={{zIndex:'1',marginLeft:'38px'}}>{source}</span>
                <h5 className="card-title">{title}....</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text">By {!author?"Unknown":author} on {publishedAt}</p>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
    }

export default NewsItem
