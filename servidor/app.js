const express = require("express");

const app = express(); // Crear una instancia de express

app.get("/otra-cosa/:cosa/:cosaDos", (request, response) => {
  const objeto = {
    mensaje: "63254732646239746239746",
    cosa: "otra cosa",
  };
  console.log(request.params);
  const json = JSON.stringify(objeto);
  return response.send(json);
});

"localhost:3000/otra-cosa/valor/1000"

module.exports = app;
