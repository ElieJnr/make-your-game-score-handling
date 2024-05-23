import { startHtml, heartHtml } from "./templates.mjs";

export function initHeart() {
  let logo01 = document.getElementById("gameHead");
  logo01.innerHTML = startHtml;
}

export function addHeart() {
  let life = document.getElementById("lifesHearts");
  life.innerHTML += heartHtml;
}

export function removeHeart(life) {
  let heartToremove = `heart${life + 1}`;
  document.getElementById(heartToremove).remove();
}

export function playSound(v) {
  var myAudio = document.createElement("audio");
  myAudio.src = v;
  myAudio.play();
}
