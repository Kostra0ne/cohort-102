
const hackersList = document.getElementById("hackers");

// hackerList is an object representing the ul in out HTML doc

console.log(typeof hackersList);
console.log(hackersList);

if (hackersList !== null) console.log(">> ", hackersList.id); // DOM property

// hackersList.style.color = "red"; // / DOM property leading to CSS properties
// hackersList.style.backgroundColor = "blue";

// get all the metrics of a given htmk tag 
console.log(hackersList.getBoundingClientRect());

// let's modify the text inside the ul
// remember HTML is only text !!!
// hackersList.innerHTML = "<li>hello hackers</li>";


const hackerThatIsntHere = document.getElementById("hacker_11");

console.log(hackerThatIsntHere, ' null !!! since not in the document... yet');

// hackersList.innerHTML += "<li id="hacker_11" class="hacker">hacker 11</li>"; // syntax error due to the quotes


// possible fixes =>
// hackersList.innerHTML += `<li id="hacker_11" class="hacker">hacker 11</li>`;
// hackersList.innerHTML += '<li id="hacker_11" class="hacker">hacker 11</li>';
hackersList.innerHTML += "<li id=\"hacker_11\" class=\"hacker\">hacker 11</li>";

const hackerThatIsHereNow = document.getElementById("hacker_11");

console.log(hackerThatIsHereNow);


const myFirstHTMLCollection = document.getElementsByTagName("li");
myFirstHTMLCollection[0].style.backgroundColor = "red";
// myFirstHTMLCollection[0].remove(); // here i'm targeting the first li in the collection and removing it from the document

const hackerList = document.getElementsByClassName("hacker");

console.log(hackerList);

// querySelector querySelectorAll => 2 methods/function on document object
const body = document.querySelector("body");
const lastHacker = document.querySelector("li.hacker:last-of-type");
const only2hackers = document.querySelectorAll("#hacker_1, #hacker_2")
const oneOutOf2hackers = document.querySelectorAll("#hackers .hacker:nth-child(odd)")

console.log(body);

console.log(lastHacker);

console.log(only2hackers);

console.log(oneOutOf2hackers);

// write a forEach loop and display each object in the oneOutOf2hackers nodeList

oneOutOf2hackers.forEach(hacker => console.log(hacker));

// const convertedHTMLCollectToArray = [...myFirstHTMLCollection];

// convertedHTMLCollectToArray.forEach(element => console.log(element));