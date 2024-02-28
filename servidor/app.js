const express = require("express");
const fs = require("fs");

const app = express(); // Crear una instancia de express

app.use(express.json());

app.get("/otra-cosa/:cosa/:cosaDos", (request, response) => {
  const objeto = {
    mensaje: "63254732646239746239746",
    cosa: "otra cosa",
  };
  console.log(request.params);
  const json = JSON.stringify(objeto);
  return response.send(json);
});

app.post("/mensaje", (request, response) => {
  const body = request.body;
  const mensaje = body.mensaje;
  if (!mensaje) {
    return response.status(400).send("Falta el mensaje");
  }
  const milisegundosDeHoy = new Date().getTime();
  fs.writeFileSync(milisegundosDeHoy + ".txt", mensaje);
  return response.status(201).send("Mensaje guardado");
});

app.get("/mensaje/:mensaje", (request, response) => {
  const nombreMensaje = request.params.mensaje;
    const mensaje = fs.readFileSync(nombreMensaje +
      ".txt", "utf8");
    return response.send(mensaje);
});



module.exports = app;
