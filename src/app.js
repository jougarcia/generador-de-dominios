/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  document.querySelector("#btn").addEventListener("click", generarDominios);
};

function generarDominios() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let dominios = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let dominio = pronoun[i] + adj[j] + noun[k] + ".com";
        dominios =
          dominios + '<li class ="list-group-item">' + dominio + "<li>";
      }
    }
  }
  document.getElementById("generarDominios").innerHTML = dominios;
}
