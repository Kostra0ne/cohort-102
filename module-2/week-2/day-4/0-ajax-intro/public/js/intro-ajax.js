const inputSearch = document.getElementById("search_input");
const inputUsername = document.getElementById("new-username");
const btnCreate = document.getElementById("btn-new-user");

function handleSearch(evt) {
  axios
    .get("/api/users?name=" + evt.target.value)
    .then((apiResponse) => {
      console.log(apiResponse);
    })
    .catch((apiError) => {
      console.log(apiError);
    });
}

function handleCreate() {}

inputSearch.onkeyup = handleSearch;
btnCreate.onclick = handleCreate;
