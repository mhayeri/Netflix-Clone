const dotenv = require("dotenv");
const path = require("path");

const envPath = path.resolve(__dirname, "../../.env");

dotenv.config({ path: envPath });

const API_KEY = process.env.API_KEY;
const requests = {
    TRENDING: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    ORIGINALS: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TOP_RATED: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ACTION: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    COMEDY: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HORROR: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    ROMANCE: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    DOCUMENTARY: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

module.exports = requests;
