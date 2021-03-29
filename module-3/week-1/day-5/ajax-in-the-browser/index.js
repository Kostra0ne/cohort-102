console.log("Hello world");

// console.log(axios);

const btn = document.getElementById("btn");

btn.onclick = function () {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
