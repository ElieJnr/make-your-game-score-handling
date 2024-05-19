var socket = new WebSocket("ws://localhost:8080/get");
socket.onopen = () => {
  console.log("Status: you connected");
};
// on n'a pas encore creer l'interface et l'id myform sur le front
var form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var formData = new FormData(form);

  var jsonData = {};
  for (var [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  socket.send(JSON.stringify(jsonData));
});

const getScore = async () => {
  try {
    const response = await fetch("http://localhost:8080/get");
    if (!response.ok) {
      throw new Error(`HTTP error status ${response.status}`);
    }
    const data = await response.json()
    // todo : updateDisplay fonction a faire pour 
  } catch (error) {
    console.log("Erreur l'or de la recuperation des donneees", error)
  }
};
