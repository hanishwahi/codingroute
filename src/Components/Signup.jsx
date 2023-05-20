import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
function Signup() {
  const navigate=useNavigate();
  const [input, setInput] = useState({
    name:"",
    email:"",
    password:"",
  });
  // const [user, setUser] = useState([])

function handleSubmit(e){ 
  e.preventDefault();
  localStorage.setItem('user', JSON.stringify(input));
  toast.success("Signup Successfully")

  
  setInterval(() => {
    
    navigate('/');
    window.location.reload();
  }, 2000);
  
 };
 

  return (
    < >
      <section className="">
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-lg-12 col-xl-11">
        <div className=" text-black" style={{ borderRadius:"25px"}} >
          <div className="">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className=" h4  mb-3 mx-1 mx-md-4 ">Sign up</p>

                <form   className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" placeholder='Full Name'
                      onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                      value={input.name}
                      name="name"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" placeholder='Email Id' 
                       value={input.email}
                       name="email"
                       onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" placeholder='Password' 
                      value={input.password}
                      name="password"
                      onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
                    </div>
                  </div>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" placeholder='Confirm Password'/>
                    </div>
                  </div> */}

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="/">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt=""/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<ToastContainer/>
    </ >
  )
}

export default Signup
