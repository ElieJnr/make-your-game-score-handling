var socket = new WebSocket("ws://localhost:8080/get");
import { blurBackgroundHTML, formHTML } from "./templates.mjs";
socket.onopen = () => {
  console.log("Status: you connected");
};


export function createForm(myfinalscore, myfinaltime) {
  const form = document.createElement("div");
  form.innerHTML = formHTML;
  const blurBackground = document.createElement("div");
  blurBackground.innerHTML = blurBackgroundHTML;
  document.body.appendChild(blurBackground);
  document.body.appendChild(form);
  // on recupere le formulaire et on ajoute un ecouteur d'evenement
  form.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("input").value;
    // on envoie les donnees au serveur
    socket.send(JSON.stringify({ name:name, score: +myfinalscore, time: myfinaltime}));
    form.remove();
    blurBackground.remove();
  });
}

const getScore = async () => {
  try {
    const response = await fetch("http://localhost:8080/get");
    if (!response.ok) {
      throw new Error(`HTTP error status ${response.status}`);
    }
    const data = await response.json();
    // todo : updateDisplay fonction a faire pour
  } catch (error) {
    console.log("Erreur l'or de la recuperation des donneees", error);
  }
};
