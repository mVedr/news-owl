import PropTypes from 'prop-types'
import React, { Component } from 'react'
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="owl.png" width="57" height="54" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link " href="#">International</a>
        </li>
        <li className="nav-item">
        <a className="nav-link " href="#">Sports</a>
        </li>
        <li className="nav-item">
        <a className="nav-link " href="#">Entertainment</a>
        </li>
        <li className="nav-item">
        <a className="nav-link " href="#">Technology</a>
        </li>
        <li className="nav-item">
        <a className="nav-link " href="#">Business</a>
        </li>
        <li className="nav-item">
        <a className="nav-link " href="#">Health</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 btn-light" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn-dark btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>  
      </>
    )
  }
}

export default Navbar