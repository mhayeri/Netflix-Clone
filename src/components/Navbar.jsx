import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix Logo"
                />
                <img
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix Avatar"
                />
            </div>
        </div>
    );
}

export default Navbar;
