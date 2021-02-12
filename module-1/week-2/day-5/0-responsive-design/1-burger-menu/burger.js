// target the burger icon
// listen to clicks
// handle with a function
// toggle the is-active css class on nav-mobile

const burgerIcon = document.getElementById("burger");
const navMobile = document.getElementById("nav-mobile");

function handleClick() {
    navMobile.classList.toggle("is-active")
}

burgerIcon.addEventListener("click", handleClick)