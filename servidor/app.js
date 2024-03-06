const express = require("express");
const fs = require("fs");
const mutarArray = require("./acciones/mutarArray.js");

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

app.post("/array", (request, response) => {
  const body = request.body;
  const array = body;
  if (!array) {
    return response.status(400).send("Falta el array");
  }
  const id = new Date().getTime();
  const Arraymutado = mutarArray(array);
  const json=JSON.stringify(Arraymutado);
  fs.writeFileSync(id + ".txt", json);
  return response.status(201).send("Array guardado con id: + id");
});

app.get("/array/: array", (request, response) => {
  const nombreArray = request.params.array;
    const json = fs.readFileSync(nombreArray +
      ".txt", "utf8");
  const array = JSON.parse(json);
    return response.send(Array);
});



module.exports = app;
