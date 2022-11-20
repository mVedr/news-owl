import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import NewsItem from './components/NewsItem';
import Spinner from './components/Spinner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
 
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=18a2ea7dae4142a792776ca3167d19e4&page=1&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  nextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=18a2ea7dae4142a792776ca3167d19e4&page=${this.state.page + 1}&pageSize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    })
  }
  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=18a2ea7dae4142a792776ca3167d19e4&page=${this.state.page - 1}&pageSize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    })
  }
 
  render() {

    return (
      <>
        <Navbar></Navbar>
        <div className="container-fluid my-2">
          <h1 className="d-flex justify-content-center">Today's Top Headlines :</h1>
          <hr />
          {this.state.loading && <Spinner ></Spinner>}
          <div className="row ">
            {!this.state.loading && this.state.articles.map((ele) => {
              return <div className="col-lg-4">
                <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description.slice(0, 125) : ""
                } imageUrl={ele.urlToImage ? ele.urlToImage : ""} newsUrl={ele.url} author={ele.author?ele.author:"unknown"} source={ele.source.name}></NewsItem>
              </div>
            })}
          </div>
        </div>
        <div className="cointainer d-flex justify-content-between mx-3">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 6)} type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
        </div>
      </>
    )
  }
}
