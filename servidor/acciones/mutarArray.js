function mutarArray(array) {
  // Metodo basico
  // let arrayNuevo = [];
  // for (let i = 0; i < array.length; i++) {
  //     arrayNuevo[i] = array[i].toUpperCase();
  // }
  // return arrayNuevo;

  // metodo con map
  return array.map((elemento) => elemento.toUpperCase());
}

module.exports = mutarArray;
