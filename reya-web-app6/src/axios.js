import axios from 'axios';

const instance = axios.create({
  baseURL: "https://us-central1-firebaseproject-335419.cloudfunctions.net/api",
  //baseURL: "http://localhost:5001/firebaseproject-335419/us-central1/api",
});

export default instance;