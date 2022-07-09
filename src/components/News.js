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

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=44fbe3dee9d94fae976cad43cc0ab90e&page=1&pageSize=${this.props.pageSize}`;
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
    handleNextClick = async()=>{
        console.log("Next");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=44fbe3dee9d94fae976cad43cc0ab90e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page : this.state.page + 1,
                articles : parsedData.articles,
                loading : false
            })
            console.log(this.state.page);
        }
    }
    handlePrevClick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=44fbe3dee9d94fae976cad43cc0ab90e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles,
            loading : false
        })
        console.log(this.state.page);
    }
  render() {
    return (
        <div className="container  my-3">
            <div className="text-center">
            <h1 style={{color: "blue"}}>Top - Headlines</h1>
            {this.state.loading && <Loading />}
            </div>
            <div className="row my-3" >
                {!this.state.loading && this.state.articles.map((element)=>{
                    return (<div className="col-md-4" key={element.url}>
                                <NewsItem title={element!=null?element.title:""} description={element!=null?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
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
