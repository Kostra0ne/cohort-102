const inputSearch = document.getElementById("search_input");
const inputUsername = document.getElementById("new-username");
const checkboxIsAdmin = document.getElementById("checkbox-is-admin");
const btnCreate = document.getElementById("btn-new-user");
const listUser = document.getElementById("users-list");
const listSearch = document.getElementById("search-results");
const btnsDelete = listUser.querySelectorAll(".btn.delete");
const btnsEdit = listUser.querySelectorAll(".btn.edit");

// DOM LOGIC

function resetSearchResult() {
  listSearch.innerHTML = "";
}

function resetCreateInput() {
  inputUsername.value = "";
  inputUsername.focus();
}

function insertNewUserInHTML(user) {
  const { name, isAdmin, _id } = user;
  const li = document.createElement("li");
  li.className = "user item" + (isAdmin === true ? " is-admin" : "");
  li.innerHTML += `
        <span>${name}</span>
        <button data-user-id="${_id}" class="btn delete">delete</button>
        <button data-user-id="${_id}" class="btn edit">edit</button>
    `;
  listUser.appendChild(li);
  listenClick(li.querySelector(".btn.edit"), handleUpdate);
  listenClick(li.querySelector(".btn.delete"), handleDelete);
}

function removeUserFromHTML(li) {
  li.remove();
}

function displaySearchResult(users) {
  listSearch.innerHTML = "";
  if (users.length) {
    users.forEach((user) => {
      listSearch.innerHTML += `<li>${user.name}</li>`;
    });
  } else {
    listSearch.innerHTML = `<li>sorry, no match found</li>`;
  }
}

function setUpdateButton(btn) {
  btn.classList.toggle("is-save-mode");
  const isSaveMode = btn.classList.contains("is-save-mode");
  btn.textContent =  isSaveMode ?  "save" : "edit"
  return isSaveMode;
}

function toggleEditableSpan(element, event, status) {
  element.classList.toggle("is-active");
  element[event]();
  element.setAttribute("contenteditable", status);
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

// UPDATE
function updateUser(id, name) {
  return axios.patch(`/api/users/${id}`, { name });
}

// DELETE
function deleteUser(id) {
  return axios.delete(`/api/users/${id}`);
}

// DOM EVENTS HANDLERS

function handleCreate() {
  createUser({
    name: inputUsername.value,
    isAdmin: checkboxIsAdmin.checked,
  })
    .then((response) => {
      insertNewUserInHTML(response.data);
      resetCreateInput();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function handleRead(evt, callback) {
  readUsers(evt.target.value)
    .then((apiRes) => callback(apiRes.data))
    .catch((apiError) => console.log(apiError));
}

function handleUpdate(evt) {
  const id = evt.target.getAttribute("data-user-id");
  const span = evt.target.closest(".item").querySelector("span");
  const isSaveMode = setUpdateButton(evt.target);
  toggleEditableSpan(span, isSaveMode ? "blur" : "focus", isSaveMode);

  if (!isSaveMode) {
    updateUser(id, span.textContent)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }
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

inputSearch.onkeyup = (evt) => {
  if (evt.target.value.length === 0) resetSearchResult();
  else handleRead(evt, displaySearchResult);
};

btnCreate.onclick = handleCreate;

btnsDelete.forEach((btn) => listenClick(btn, handleDelete));

btnsEdit.forEach((btn) => listenClick(btn, handleUpdate));

// readUsers(); // call  all get the users (since no string is passed as arg)
