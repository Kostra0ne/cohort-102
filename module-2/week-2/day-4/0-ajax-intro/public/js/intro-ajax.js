const inputSearch = document.getElementById("search_input");
const inputUsername = document.getElementById("new-username");
const checkboxIsAdmin = document.getElementById("checkbox-is-admin");
const btnCreate = document.getElementById("btn-new-user");
const userList = document.getElementById("users-list");

// dom logic
function insertNewUser(response) {
  const { name, isAdmin, _id } = response.data;
  const li = document.createElement("li");
  li.className = "user item" + (isAdmin === true ? " is-admin" : "");
  li.innerHTML += `
        <span>${name}</span>
        <button data-user-id="${_id}">delete</button>
    `;
  li.querySelector("button").onclick = handleUserRemove;
  userList.appendChild(li);
}

// handlers
function handleUserRemove(evt) {
  console.log(evt.target.getAttribute("data-user-id"));
}

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

function handleCreate(evt) {
  evt.preventDefault(); // mandatory: it prevents the default behaviour to happend : in this case, since the button in the form refreshes the page, it just wont
  // use axios.post to send data to server
  // check axios doc =>post
  axios
    .post("/api/users", {
      name: inputUsername.value,
      isAdmin: checkboxIsAdmin.checked,
    })
    .then(insertNewUser)
    .catch(function (error) {
      console.log(error);
    });
}

inputSearch.onkeyup = handleSearch;
btnCreate.onclick = handleCreate;
// document.getElementById("my-fake-form").onsubmit = handleCreate;
