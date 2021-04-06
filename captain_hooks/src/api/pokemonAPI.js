import axios from "axios";

const service = axios.create({
  baseURL: "//ironhack-pokeapi.herokuapp.com/pokemon",
});

const errorHandler = (error) => {
  if (error.response && error.response.data) {
    console.log(error.response.data);
  }
  throw error;
};

const api = {
  service,

  getAll() {
    return service
      .get("/?limit=964")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOne(id) {
    return service
      .get(`/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default api;
