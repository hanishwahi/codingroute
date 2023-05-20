import React from "react";
import Video from "../Videos/Untitled.mp4";
import RecomendedCourse from './RecomendedCourse';
 
 

function Home() {
  // const userName= JSON.parse(localStorage.getItem('user'));
  return (<>
    <div>
      <div class=" text-center   banner">
   
        <div class="">
          <video src={Video} autoPlay loop muted></video>
        </div>
      </div>
      <RecomendedCourse></RecomendedCourse>
    </div>
    </>
  );
}

export default Home;
