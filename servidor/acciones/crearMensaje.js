const readline = require("readline");
const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ejecutar() {
  readLineInterface.question("Ingrese el mensaje: ", function (mensaje) {
    enviarMensaje(mensaje);
    readLineInterface.close();
  });
}

function enviarMensaje(mensaje) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const mensajeString = JSON.stringify({ mensaje: mensaje });
  fetch("http://localhost:3000/mensaje", {
    method: "POST",
    body: mensajeString,
    headers: myHeaders,
  })
    .then((response) => {
      response.text().then((result) => {
        console.log(result);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}



ejecutar();
