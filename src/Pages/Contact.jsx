import React from "react";
import "../Styles/global.css"
import img1 from "../assets/img.1.jpeg"
import Navbar from "../Components/Navbar";
function About (){
    return(
        
       <div className="AboutContainer">
        <Navbar/>
        <div className="container w-50" style={{paddingTop:"6rem",justifyContent:"center",textAlign:"center"}}>
                    <h1 className="display-4 fw-bold lh-base text-dark">
                    Contact Us..
                    </h1>
                    <p  className="fs-3" style={{color:"Gray"}}>
                        We'd love to hear from you! Whether you have a question about our products, need support, or just want to say hello, our team is ready to help.
                    </p>
                </div>
       
               
            <div className="d-flex fd-row content1 pt-5 mt-5">
                
               
            </div>

       </div>
    )
}
export default About;