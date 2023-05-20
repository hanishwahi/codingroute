import React from 'react'
import { Link } from "react-router-dom";



function CoursesNav() {
  return (
    

      <div className="container navbar-collapse col-lg-7 crs" id="navbarNavAltMarkup">
                <div className="navbar-nav navbar-navcrs">
                  <Link className="nav-item nav-link " to="/">
                    HTML 
                  </Link>
                  <Link className="nav-item nav-link" to="/">
                    CSS
                  </Link>
                  <Link className="nav-item nav-link" to="/">
                    Javascript
                  </Link>
                  <Link className="nav-item nav-link" to="/">
                    React
                  </Link>
                  <Link className="nav-item nav-link" to="/">
                    Node
                  </Link>
                  <Link className="nav-item nav-link" to="/">
                    Python
                  </Link>
                  <Link className="nav-item nav-link" to="/">
                    Mongo
                  </Link>
                  
                </div>
              </div>
              
            
   
  )
}

export default CoursesNav
