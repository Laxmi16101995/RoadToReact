import Navbar from "../components/navbar.js";
document.querySelector("#top").innerHTML = Navbar();

import "../styles/index.css";

import GoTo from "../components/map.js";
let id;
function main(GoTo, delay, url) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    GoTo(url);
  }, delay);
}

document.querySelector("#input").addEventListener("input", function () {
  let rece = document.querySelector("#input").value;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${rece}`;
  //console.log(url);
  main(GoTo, 2000, url);
});

let data = JSON.parse(localStorage.getItem("data"));
//console.log(data);

if (data !== null) {
  document
    .querySelector("#details")
    .append(
      "<<=================================================Account Details"
    );
  document.querySelector("#one").append(data.name);
  document.querySelector("#two").append(data.mobile);
  document.querySelector("#three").append(data.email);
}
