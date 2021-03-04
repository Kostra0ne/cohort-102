const inputSearch = document.getElementById("search_input");
const inputUsername = document.getElementById("new-username");
const checkboxIsAdmin = document.getElementById("checkbox-is-admin");
const btnCreate = document.getElementById("btn-new-user");
const userList = document.getElementById("users-list");

// dom logic
function insertNewUser(user) {
  const { name, isAdmin, _id } = user;
  const li = document.createElement("li");
  li.className = "user item" + (isAdmin === true ? " is-admin" : "");
  li.innerHTML += `
        <span>${name}</span>
        <button data-user-id="${_id}">delete</button>
    `;
  li.querySelector("button").onclick = handleUserRemove;
  userList.appendChild(li);
  inputUsername.value = "";
  inputUsername.focus();
}

function removeUserFromHTML(li) {
  li.remove();
}

// handlers
function handleGetUsers(evt) {
  axios
    .get(`/api/users/`)
    .then((users) => {
        users.data.forEach(user => {
          insertNewUser(user)
        })
    })
    .catch((apiError) => console.log(apiError));
}

// handleGetUsers()

function handleUserRemove(evt) {
  axios
    .delete(`/api/users/${evt.target.getAttribute("data-user-id")}`)
    .then(() => {
      removeUserFromHTML(evt.target.parentElement);
    })
    .catch((apiError) => console.log(apiError));
}

function handleSearch(evt) {
  axios
    .get("/api/users")
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
    .then((response) => insertNewUser(response.data))
    .catch(function (error) {
      console.log(error);
    });
}

inputSearch.onkeyup = handleSearch;
btnCreate.onclick = handleCreate;
// document.getElementById("my-fake-form").onsubmit = handleCreate;
