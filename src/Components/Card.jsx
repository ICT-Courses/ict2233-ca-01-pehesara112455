import React from "react";
import { GrLayer } from "react-icons/gr";

function Phonecard(){
    return(
        <div className="card phone-card my-3 mx-2">
            <img
            src="/src/assets/iPhone-16-Pro-Max-400x380.webp"
            className="card-img-top"
            alt="Iphone"/>
            <h4>i Phone 11 pro</h4>
            <p>The latest flagship from TechX with an A15 Bionic chip and a cinematic camera system.</p>
            <p style={{color:"red", marginBottom:"0px"}}>Rs.209,000</p>
            <p style={{color:"gray",fontWeight:"bold",fontSize:"1.5rem",marginTop:"0px"}}>Rs.204,000</p>
        </div>
    )
}
export default Phonecard;