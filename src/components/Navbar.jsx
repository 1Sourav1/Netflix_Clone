import React, { useEffect, useState } from 'react';
import "../css/Navbar.css";
import Logo from "../image/Netflix-logo.png";
import Avatra from "../image/Avatar.png"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [show, handleShow] = useState(false);
    const navigate=useNavigate();

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else (
            handleShow(false)
        )
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img className='nav_logo' src={Logo} alt="logo" onClick={()=>navigate("/")}/>
                <img className='nav_avatar' src={Avatra} alt="avatra" onClick={()=>navigate("/profile")}/>
            </div>
        </div>
    )
}

export default Navbar;