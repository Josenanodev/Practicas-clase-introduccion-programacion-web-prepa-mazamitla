// fetch("https://pokeapi.co/api/v2/pokemonesX/ditto").then((respuesta) => {
//   respuesta.json().then((pokemon) => {
//     console.log(pokemon.order);
//   }).catch((error) => {
//     console.log("Error al obtener el pokemon", error);
//   });
//   console.log("Hola amigos");
// });

// fetch({
//     method: "GET",
//     url: "https://pokeapi.co/api/v2/pokemonesX/ditto",
// })

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

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "Hola Muchachos",
//     body: "Como tan?",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => {
//     // console.log(json);

//   });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    id: "Dos",
    tile: "foo",
    body: "bar",
    useId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => {
    console.log("Error al crear", error);
  });
