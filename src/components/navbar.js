import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/"><img className="img-fluid" src="https://logoeps.com/wp-content/uploads/2013/04/magic-the-gathering-vector-logo.png" alt="bænjåd"></img></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to="/about">About</Link>
          <Link className="nav-item nav-link" to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;