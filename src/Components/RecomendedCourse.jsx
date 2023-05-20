import React from "react";
import { Link } from "react-router-dom";

function RecomendedCourse() {
  return (
    
      <div>
      <div className="container mt-5 ">
        <h1 className="text-center mb-5 h3 recomd">Recommended Courses</h1>
        <div className="display">
          <div className="shadow" style={{ width: "300px" }}>
            <iframe
              src="https://www.youtube.com/embed/qyX0qMQaP_U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="shadow" style={{ width: "300px" }}>
            <iframe
              src="https://www.youtube.com/embed/qyX0qMQaP_U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="shadow" style={{ width: "300px" }}>
            <iframe
              src="https://www.youtube.com/embed/qyX0qMQaP_U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">HTML </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
            <button type="button" className="btn px-1"><Link className="text-decoration-none butn" to="/Courses">Explore More</Link></button>
        </div>
       
      </div>
    </div>
  );
}

export default RecomendedCourse;
