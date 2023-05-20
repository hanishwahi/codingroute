import React from 'react'
import Video1 from "../Videos/video1.mp4";

function About() {
  return (
    <>
    <div>
       <div>
      <div class=" text-center   banner">
        <div class="">

          <video src={Video1} autoPlay loop muted></video>
        </div>
      </div>
    </div>
    </div>


<div className="container-fluid">
    <div className="container">
        <div className="row ">
            <div className="col text-center  py-5">
                <h1 className='recomd '>About Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis quos quam officia, molestias nulla laboriosam eveniet voluptate animi eos pariatur temporibus velit optio porro recusandae vitae a dolorem, nemo ratione ipsam! Ducimus ad dolore accusamus eum porro libero! Neque, impedit expedita explicabo porro, quia eius quis iure non veniam laudantium facere obcaecati eligendi accusantium? Aliquid ad est tenetur praesentium quo reprehenderit eos cupiditate laboriosam voluptatem illum numquam veritatis nesciunt repellat, ipsum modi culpa tempora quibusdam sint, voluptatibus dolores placeat. Optio dolore, tempore nam possimus nobis mollitia accusamus modi, eveniet atque exercitationem culpa hic vitae et! Amet architecto corrupti facere!</p>
            </div>
        </div>
    </div>
    
</div>
    </>
  )
}

export default About
