import React from "react";
import { Link } from "react-router-dom";

const phoneCard=({phone})=>{
    const renderStar = (rating) =>{
        const Stars =[];
        for (let i= 0;i < 5; i++){
            Stars.push(
                <span key={i} className={i< rating ? "text-warning":"text-secondary"}>
                    &#9733;
                </span>
            );
        }
        return Stars
    }
    return(
         <div className="card phone-card my-3 mx-2">
            <img
            src="/src/assets/iPhone-16-Pro-Max-400x380.webp"
            className="card-img-top"
            alt="Iphone"/>
            
             <div className="d-flex justify-content-center mb-2">
          {renderStar(phone.rating)}
        </div>
        </div>
    )
}
export default phoneCard;