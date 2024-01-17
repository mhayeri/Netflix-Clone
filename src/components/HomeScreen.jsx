import React from "react";
import "../styles/HomeScreen.css";

import Navbar from "./Navbar";
import Banner from "./Banner";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Navbar />

            <Banner />

            {/* Rows - Movies/Shows */}
        </div>
    );
}

export default HomeScreen;
