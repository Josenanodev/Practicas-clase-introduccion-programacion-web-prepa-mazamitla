fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((respuesta) => {
    console.log(respuesta);
    return respuesta.json();
})