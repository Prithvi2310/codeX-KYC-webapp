import React, { useState } from 'react'
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

  return (
    <header className="navbar">
        <nav className="navbar__container wrapper">
            <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
                <img src={Logo} alt="logo" />
            </a>

            <ul className={`${showNav ? "show" : ""}`}>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">Home</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">Form</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">Document</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">Video</a>
                </li>
            </ul>

            <div className="navbar__btns">
                <a href="#">login</a>
                <a href="#" className="btn">
                    register
                </a>
            </div>

            <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoMdClose /> : <IoMenu />}
            </div>
        </nav>
    </header>
  );
};

export default Navbar