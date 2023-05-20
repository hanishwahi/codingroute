import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class="bg-dark text-center text-white mt-5">
     <div class="container p-4 pb-0">
       <section class="mb-4">
         <a
          class="btn text-white btn-floating m-1"
          style={{backgroundColor:"#3b5998"}} 
          href="#!"
          role="button"
          ><i class="fab fa-facebook-f"></i
        ></a>
  
         <a
          class="btn text-white btn-floating m-1"
          style={{backgroundColor:"#55acee"}} 
          href="#!"
          role="button"
          ><i class="fab fa-twitter"></i
        ></a>
  
         <a
          class="btn text-white btn-floating m-1"
          style={{backgroundColor:"#dd4b39"}} 
          href="#!"
          role="button"
          ><i class="fab fa-google"></i
        ></a>
  
         <a
          class="btn text-white btn-floating m-1"
          style={{backgroundColor:"#ac2bac"}} 
          href="#!"
          role="button"
          ><i class="fab fa-instagram"></i
        ></a>
  
         <a
          class="btn text-white btn-floating m-1"
          style={{backgroundColor:"#0082ca"}} 
          href="#!"
          role="button"
          ><i class="fab fa-linkedin-in"></i
        ></a>
         <a
          class="btn text-white btn-floating m-1"
          style={{backgroundColor:"#333333"}} 
          href="#!"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </section>
      <Link className='navbar-brand text-dark ' to='/'>Coding Route</Link>
     </div>
   
    
  </footer>
  )
}

export default Footer
