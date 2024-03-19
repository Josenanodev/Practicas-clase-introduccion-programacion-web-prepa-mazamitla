let arrayOriginal = ["hola", "mundo", "luminetz"];

function convertirAMayusculas(array) {
  // Metodo basico
  // let arrayNuevo = [];
  // for (let i = 0; i < array.length; i++) {
  //     arrayNuevo[i] = array[i].toUpperCase();
  // }
  // return arrayNuevo;

  // metodo con map
  return array.map((elemento) => elemento.toUpperCase());
}

console.log("El array es:" + convertirAMayusculas(arrayOriginal));
