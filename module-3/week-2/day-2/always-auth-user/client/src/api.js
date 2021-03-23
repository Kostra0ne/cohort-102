import axios from "axios";
console.log(process.env.REACT_APP_BACKEND_URL);

const service = axios.create({
  withCredentials: true,
  //   baseURL: "http://localhost:4000/api",
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
});

// service.get("http://localhost:4000/api/auth/signin"); // Without baseURL

export default {
  service,

  signup(userInfo) {
    return service.post("/auth/signup", userInfo);
  },

  getLoggedInUser() {
    return service.get("/auth/current-user");
  },
};
