import React from "react";
import Navbar from "../Components/Navbar"
import "../Styles/global.css"
import Card from "../Components/Card"


function Home(){
  return(
    
    <div className="home-container">
      <Navbar/>
      <div id="homeCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{height:"90vh",width:"100%",overflow:"hidden",paddingTop:"4rem",}}>
      <div className="carousel-inner h-100 w-100">
      <div className="carousel-item active h-100 w-100" data-bs-interval="3000">
            <img
              src="/src/assets/img2.jpg"
              className="d-block w-100 h-100"
              style={{ objectFit: "inherit" }}
              alt="Slide 1"
            />
             
      </div>
      <div className="carousel-item active h-100 w-100" data-bs-interval="4000">
            <img
              src="/src/assets/img2.jpg"
              className="d-block w-100 h-100"
              style={{ objectFit: "inherit" }}
              alt="Slide 1"
            />
             
      </div>
      <div className="carousel-item active h-100 w-100" data-bs-interval="5000">
            <img
              src="/src/assets/img2.jpg"
              className="d-block w-100 h-100"
              style={{ objectFit: "inherit" }}
              alt="Slide 1"
            />
             

      </div>
           

      </div>

      <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
         <div style={{position:"absolute",
          top:"80%",
          left:"15%",
          transform:"translate(-50%, -50%)",
          zIndex:10,
          textAlign:"left",
          color:"white",fontWeight:"bold",
          fontSize:"3rem",
          

         }}>
          <p style={{marginBottom:"0.3rem",lineHeight:"1.2"}}>NEW ARRIVALS </p>
          <p style={{marginTop:"0",lineHeight:"1.2"}}>SHOP NOW</p>
         </div>
         
         

      </div>
      <div className="container text-start">
          <h2 style={{marginTop:"10px",fontSize:"3rem"}}>TOP DEAL</h2>
      </div>
      
      
      <div className="container w-100 h-auto  d-flex fd-row " style={{flexWrap:"wrap",}}>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
      </div>
      
    </div>

  )
}export default Home;