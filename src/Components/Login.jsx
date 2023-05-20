import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 

function Login() {
  const navigate=useNavigate();
  const [input, setInput] = useState({
    email:"",
    password:"",
  });


  function handleLogin(e){
    e.preventDefault();
   const loggedUser= JSON.parse(localStorage.getItem('user'));
   console.log(loggedUser)
   
if(input.email=== loggedUser.email && input.password=== loggedUser.password){
  localStorage.setItem("loggedin", true);
 
   toast.success("Login Successfully")
   setInterval(() => {
    navigate('/home');
    window.location.reload();
  }, 2000);
  
}

else{
  toast.error("Invalid Credentials")
  } 

};
  




  return (
    <>
      <section className="my-5">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt=" "/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className=" h3 fw-normal mb-0 me-3">Login</p>
             
            
          </div>
          <br />

           <div className="form-outline flex-fill mb-4">
            <input type="email"  className="form-control "
              placeholder="Enter a valid email address" 

              autoComplete='on'
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                      value={input.email}
                      name="email"/>
            <label className="form-label" ></label>
          </div>

           <div className="form-outline mb-3">
            <input type="password"   className="form-control "
              placeholder="Enter password" 
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                      value={input.password}
                      name="password"/>
            <label className="form-label" ></label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
             <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="/" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button onClick={handleLogin} type="button" className="btn btn-primary btn-lg"
              style={{paddingLeft:" 2.5rem",paddingRight: "2.5rem"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/Signup"
                className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>

 <ToastContainer/>
    </>
  )
}

export default Login
