import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,source,author}=this.props;
    return (
     <>
     <div className="card my-3 mx-2" >
  <img src={imageUrl} className="card-img-top" alt="..."  />
  <div className="card-body">
    <h4 className="card-title">{title}<span class="position-absolute translate-middle badge top-0  rounded-pill bg-dark" style={{left:"90%",zIndex:"5" }}>{source}</span></h4>
    <h5 className="card-text">{description}...</h5>
    <h6 className="card-text text-left">-{author}</h6>
    <a href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
   </>
    )
  }
}

export default NewsItem