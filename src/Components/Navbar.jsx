import { Link, NavLink } from "react-router-dom";
import {FaMobileAlt } from "react-icons/fa"

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-2" style={{backgroundColor:'#000000ff'}}>
            <div className="container-fluid px-3">
                <Link className="navbar-brand" to="/">
                <FaMobileAlt size={40} className="me-2 fs-3" />

                MobileStore</Link>

                <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-5">
                            <NavLink className="nav-link fs-5 " to="/">Home</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className="nav-link fs-5 " to="/Phone">Phone</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className="nav-link fs-5 " to="/About">About</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className="nav-link fs-5" to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}
export default Navbar;