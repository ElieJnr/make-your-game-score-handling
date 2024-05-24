var socket = new WebSocket("ws://localhost:8080/get");
import { blurBackgroundHTML, formHTML } from "./templates.mjs";
socket.onopen = () => {
  console.log("Status: you connected");
};

export function createForm(myfinalscore, myfinaltime) {
  const timeNumber = Number(myfinaltime.replace("Time: ", ""))
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
    if (name) {
      // on envoie les donnees au serveur
      socket.send(
        JSON.stringify({ name: name, score: +myfinalscore, time: timeNumber })
      );
    }
    form.remove();
    blurBackground.remove();
  });
}
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
};
