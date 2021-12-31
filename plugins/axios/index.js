const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.API_MERCADOLIBRE,
});

module.exports = axiosInstance;
