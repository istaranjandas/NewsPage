import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            page : 1,
            loading : false
        }
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=44fbe3dee9d94fae976cad43cc0ab90e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        })
    }
    async componentDidMount(){
        document.title= 'iNews - ' + this.cap(this.props.category) 
        this.updateNews()
        this.setState({page : this.state.page + 1})
    }
    handleNextClick = async()=>{
            this.setState({page : this.state.page + 1});
            this.updateNews();
        }
    
    handlePrevClick = async() =>{
        this.setState({page : this.state.page - 1});
        this.updateNews();
    }
    cap(str){
        let s = str.slice(1,str.length)
        return str.charAt(0).toUpperCase() + s
    }
  render() {
    return (
        <div className="container my-3">
            <div className="text-center">
            <h1>Top - {this.cap(this.props.category)} Headlines</h1>
            {this.state.loading && <Loading />}
            </div>
            <div className="row my-4" >
                {!this.state.loading && this.state.articles.map((element)=>{
                    return (<div className="col-md-3" key={element.url}>
                                <NewsItem title={element!=null?element.title:""} description={element!=null?element.description:""} imageUrl={element.urlToImage} 
                                newsUrl={element.url} author={element.author} publishedAt={new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
                            </div>
                            )
                    }   
                    )
                }
                
            </div>
            <div className="container d-flex justify-content-between my-3">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next&rarr;</button>
            </div>
        
        </div>
    )
  }
}

export default News
