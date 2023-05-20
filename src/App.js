import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import CoursesNav from './Components/CoursesNav'
import Courses from './Components/Courses'
import Contact from './Components/Contact'
  
function App() {
  return (
    < >
      <BrowserRouter>
      <Header></Header>
     
       
      <Routes>
      <Route index element={<Home/>}></Route>  
      <Route path='/login' element={<Login/>}></Route>   
       <Route path='/courses' element={<Courses/>}></Route>
        
        <Route path='/signup' element={<Signup/>}></Route> 
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route> 
       
      </Routes>
      
      <Footer></Footer>
      </BrowserRouter>


    </ >
  )
}

export default App
