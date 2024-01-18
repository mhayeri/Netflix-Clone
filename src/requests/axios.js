const axios = require("axios");
const dotenv = require("dotenv");
const path = require("path");

const envPath = path.resolve(__dirname, "../../.env");

dotenv.config({ path: envPath });

const instance = axios.create({
    baseURL: process.env.BASE_URL,
});

module.exports = instance;
