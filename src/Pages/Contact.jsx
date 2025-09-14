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
       
               
            <div className="d-flex fd-row content1 w-100">
                <div className="form-container">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control rounded-3" id="name" placeholder="Your Name" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control rounded-3" id="email" placeholder="name@example.com" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Message" className="form-label">Massage</label>
                        <input type="text" className="form-control rounded-3" id="Message" placeholder="Your Message..." />
                      </div>
                      <button type="Submit" className="btn btn-primary w-100 rounded-3">Send Message</button>
                </div>
                <div className="contact-Details-container">
                    <h1>Our details</h1>
                    <p>
                        <strong>Address:</strong><br/>123 Tech Avenue, Colombo, Sri Lanka
                    </p>
                    <p>
                        <strong>Phone:</strong><br/>071-1234567
                    </p>
                    <p>
                        <strong>Email:</strong><br/>info@mobilestore.lk

                    </p>
                    <h1  style={{paddingBottom:"30px"}}>Find Us Here</h1>
                </div>
                
               
            </div>

       </div>
    )
}
export default About;