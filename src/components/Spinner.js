import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class Spinner extends Component {
  render() {
    return (
     
      <div className="d-flex justify-content-center ">
          <img src={Loading} className="img-fluid" alt="Loading"  width="30%" height="30%"/>
      </div>
    )
  }
}
