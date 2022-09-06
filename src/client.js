import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4200",
});

export default client;
