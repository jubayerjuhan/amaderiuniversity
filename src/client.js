import axios from "axios";

const client = axios.create({
  baseURL:
    // "https://admission-helpline.herokuapp.com/" ||
    "http://localhost:4200/",
});

export default client;
