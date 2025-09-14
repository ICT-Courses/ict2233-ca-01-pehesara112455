import React from "react";
import "../Styles/global.css"
import img1 from "../assets/img.1.jpeg"
import Navbar from "../Components/Navbar";
function About (){
    return(
        
       <div className="AboutContainer">
        <Navbar/>
            <div className="d-flex fd-row content1 pt-5 mt-5">
                <div className="container w-50" style={{paddingTop:"13rem"}}>
                    <h1 className="display-4 fw-bold lh-base text-dark">
              Where Technology Meets Trust
            </h1>
                </div>
                <div className="container my-3" >
                        <img 
              src={img1} 
              alt="A collection of modern smartphones" 
              className="img-fluid" style={{borderRadius:"14px", boxShadow:"0 4px 12px rgba(0, 0, 0, 0.4)"}}
            />
                </div>
            </div>
            <div className="content2">
                <h1 className="fs-20 fw-bold">
                    Our Story
                </h1>
                <p className="fs-5 " style={{color:"#333333"}}>            Founded in 2010, MobileStore began as a small shop with a big vision: to simplify the process of buying a mobile phone. We noticed that customers often felt overwhelmed by choices and doubted the authenticity of products. Our solution was simple: create a store built on transparency, quality, and genuine customer care. Over the years, we've grown, but our core values remain the same.
                </p>
            </div>
            <div className="d-flex fd-row content1 p-5 mt-5" style={{gap:"5%"}}>
            <div className="card valueCard my-3 mx-2">
           
            <h4 style={{color:"gray",marginTop:"3rem",fontWeight:"bolder",marginBottom:"1rem",fontSize:"2rem"}}>Expert Guidance</h4>
            
    <p style={{color:"gray", marginBottom:"5rem", fontSize:"1rem"}}>                  
                  Our team is composed of passionate tech experts ready to help you find the perfect device without any pressure.
</p>
            
        </div>
         <div className="card valueCard my-3 mx-2">
           
            <h4 style={{color:"gray",marginTop:"3rem",fontWeight:"bolder",marginBottom:"1rem",fontSize:"2rem"}}>Quality Assurance</h4>
            <p style={{color:"gray", marginBottom:"5rem", fontSize:"1rem"}}>                  Every device is meticulously inspected to ensure it meets our high standards. We only sell authentic, reliable products.
</p>
            
        </div>
         <div className="card valueCard my-3 mx-2">
           
            <h4 style={{color:"gray",marginTop:"3rem",fontWeight:"bolder",marginBottom:"1rem",fontSize:"2rem"}}>Customer First</h4>
            <p style={{color:"gray", marginBottom:"5rem", fontSize:"1rem"}}>                                    Your satisfaction is our top priority. We offer dedicated support and a hassle-free return policy.

</p>
            
        </div>
            </div>

       </div>
    )
}
export default About;