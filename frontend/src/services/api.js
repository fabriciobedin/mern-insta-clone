import axios from "axios";

const api = axios.create({
  baseURL: "http://insta-clone-class-back.herokuapp.com"
});

export default api;
