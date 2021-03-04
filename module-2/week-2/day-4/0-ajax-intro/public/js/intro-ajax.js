const inputSearch = document.getElementById("search_input");
const inputUsername = document.getElementById("new-username");
const checkboxIsAdmin = document.getElementById("checkbox-is-admin");
const btnCreate = document.getElementById("btn-new-user");
const userList = document.getElementById("users-list");
const btnsDelete = userList.querySelectorAll(".btn.delete");
const btnsEdit = userList.querySelectorAll(".btn.edit");

// DOM LOGIC

function resetCreateInput() {
  inputUsername.value = "";
  inputUsername.focus();
}

function insertNewUser(user) {
  const { name, isAdmin, _id } = user;
  const li = document.createElement("li");
  li.className = "user item" + (isAdmin === true ? " is-admin" : "");
  li.innerHTML += `
        <span>${name}</span>
        <button data-user-id="${_id}" class="btn delete">delete</button>
        <button data-user-id="${_id}" class="btn edit">edit</button>
    `;
  userList.appendChild(li);
  listenClick(li.querySelector(".btn.edit"), handleUpdate);
  listenClick(li.querySelector(".btn.delete"), handleDelete);
}

function removeUserFromHTML(li) {
  li.remove();
}

// AJAX HANDLERS (CRUD)

// CREATE
function createUser(user) {
  return axios.post("/api/users", user); // return the promise itself
}

// READ
function readUsers(string) {
  let query = string ? `?name=${string}` : "";
  return axios.get(`/api/users${query}`);
}

readUsers(); // call the get users without a 

// UPDATE
function updateUser(evt) {
  console.log("todo edit");
}

// DELETE
function deleteUser(id) {
  return axios.delete(`/api/users/${id}`);
}

// DOM EVENTS HANDLERS

function handleCreate(evt) {
  // evt.preventDefault();

  createUser({
    name: inputUsername.value,
    isAdmin: checkboxIsAdmin.checked,
  })
  .then((response) => insertNewUser(response.data))
  .catch(function (error) {
    console.log(error);
  });
}

function handleRead(evt) {
  readUsers(evt.target.value)
    .then((users) => {
      console.log(users.data);
    })
    .catch((apiError) => console.log(apiError));
}

function handleUpdate(evt) {
  console.log("todo handle update");
}

function handleDelete(evt) {
  deleteUser(evt.target.getAttribute("data-user-id"))
    .then(() => removeUserFromHTML(evt.target.parentElement))
    .catch((apiError) => console.log(apiError));
}

// GENERIC LISTENER

function listenClick(element, callback) {
  element.onclick = callback;
}

// DOM EVENT LISTENERS

inputSearch.onkeyup = handleRead;

btnCreate.onclick = handleCreate;

btnsDelete.forEach((btn) => listenClick(btn, handleDelete));

btnsEdit.forEach((btn) => listenClick(btn, handleUpdate));
