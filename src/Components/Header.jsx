import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style.css";
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CoursesNav from "./CoursesNav";

function Header( ) {
const Navigate= useNavigate();

  const loggedUser= JSON.parse( localStorage.getItem('loggedin'));

  function handleLogout(){
    localStorage.removeItem('user')
    localStorage.removeItem('loggedin')
    toast.success("Logout Successfully")
Navigate('/')
    window.location.reload();
  }

   
 

   

  return (
    <>
      <div className="container-fluid bg">
        <div className="container">
          <div className="row">
            <nav className="navbar  col-lg-12 navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand col-lg-3" to="/">
                Coding <span style={{color:"purple", fontWeight:"700"}}>Route</span>
              </Link>
              
              <div className="collapse navbar-collapse col-lg-7" id="navbarNavAltMarkup">
                <div className="navbar-nav navbar-nav1">
                  <Link className="nav-item nav-link " to="/">
                    Home 
                  </Link>
                  <Link className="nav-item nav-link" to="/About">
                    About
                  </Link>
                  <Link className="nav-item nav-link" to="/Courses">
                    Courses
                  </Link>
                  <Link className="nav-item nav-link" to="/Contact">
                    Contact
                  </Link>
                </div>
              </div>
          
          <div className="col-lg-2">
            <div className="d-flex align-items-center">
             {
(loggedUser)?  <button onClick={handleLogout} type="button" className="btn px-1 ">
<Link className="text-decoration-none butn" to="Login">Logout </Link>           
</button> : <button type="button" className="btn px-1 ">
                <Link className="text-decoration-none butn" to="Login">Login/ Signup </Link>           
              </button>

             }
              
            </div>
          </div>
          </nav>
          </div>

        </div>
        
      </div>
      <hr style={{margin:"0px"}}/>

      <CoursesNav/>
      <ToastContainer/>
    </>
  );
}

export default Header;
