const URL = "https://api.chucknorris.io/jokes/random";

function displayJoke(text, img) {
  document.getElementById("joke").textContent = text;
  document.getElementById("image").src = img;
}

function getARandomJoke() {
  axios
    .get(URL)
    .then((apiRes) => {
      const { value: joke, icon_url: image } = apiRes.data;
      displayJoke(joke, image);
    })
    .catch((apiErr) => {
      console.error(apiErr);
    });
}

try {
  document.getElementById("get-joke").onclick = getARandomJoke;
} catch (err) {
  console.log(err);
}
