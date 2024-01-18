import React, { useEffect, useState } from "react";
import "../styles/Row.css";
import axios from "../requests/axios";

function Row({ title, url, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(url);
            setMovies(request.data.results);
            return request;
        }
        fetchMovies();
    }, [url]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row__poster ${
                                    isLargeRow && "row__poster__large"
                                }`}
                                key={movie.id}
                                src={`${BASE_URL}${
                                    isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                alt={movie.name}
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default Row;
