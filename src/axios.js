import axios from "axios";

const instance = axios.create({
  baseURL: " http://localhost:5001/amozon-clone-3886c/us-central1/api", //the api (cloud function) url
});
export default instance;
