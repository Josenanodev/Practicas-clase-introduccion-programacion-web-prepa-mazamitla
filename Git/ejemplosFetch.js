fetch("https://pokeapi.co/api/v2/pokemonesX/ditto").then((respuesta) => {
  respuesta.json().then((pokemon) => {
    console.log(pokemon.order);
  }).catch((error) => {
    console.log("Error al obtener el pokemon", error);
  });
  console.log("Hola amigos");
});

fetch({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemonesX/ditto",
})

//JSON: JavaScript Object Notation
// {
//   "nombre": "Juan",
//   "apellido": "Perez",
//   "edad": 30,
//   "direccion": {
//     "calle": "Av. Siempre Viva",
//     "numero": 742
//   },
// }

const objeto = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  direccion: {
    calle: "Av. Siempre Viva",
    numero: 742,
  },
};
