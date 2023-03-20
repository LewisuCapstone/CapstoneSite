import axios from "axios";

export default axios.create({
  // 8080 for tutorial, 8082 for charity
  baseURL: "http://localhost:8082/api",
  headers: {
    "Content-type": "application/json"
  }
});