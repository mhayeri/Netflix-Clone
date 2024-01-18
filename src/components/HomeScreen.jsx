import React from "react";
import "../styles/HomeScreen.css";
import requests from "../requests/requests";

import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Navbar />
            <Banner />
            <Row title="Trending Now" url={requests.TRENDING} isLargeRow />;
            <Row title="Netflix Originals" url={requests.ORIGINALS} />
            <Row title="Top Rated" url={requests.TOP_RATED} />
            <Row title="Action Movies" url={requests.ACTION} />
            <Row title="Comedy Movies" url={requests.COMEDY} />
            <Row title="Horror Movies" url={requests.HORROR} />
            <Row title="Romance Movies" url={requests.ROMANCE} />
            <Row title="Documentaries" url={requests.DOCUMENTARY} />
        </div>
    );
}

export default HomeScreen;
