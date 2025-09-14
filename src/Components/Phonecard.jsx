import React from "react";
import { Link } from "react-router-dom";
import "../Styles/global.css"

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
         <div className="phone-card">
            <img
            src="/src/assets/iPhone-16-Pro-Max-400x380.webp"
            className="card-img-top"
            alt="Iphone"/>
            <p>{phone.name}</p>
            <p>{phone.price}</p>
            <p>{phone.shortDescription}</p>
            
             <div className="d-flex justify-content-center mb-2">
          {renderStar(phone.rating)}
        </div>
        </div>
    )
}
export default phoneCard;