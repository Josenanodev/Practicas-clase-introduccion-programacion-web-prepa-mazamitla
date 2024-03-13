function mutarArray(array) {
  // mutar el array de strings y devolverlo con mayusculas
  // let textoMinusculas = "hola, adios!";
  // let textoMayusculas = textoMinusculas.toUpperCase();
  // // textoMayusculas = "HOLA, ADIOS!";
  // console.log(textoMayusculas);
  const arrayNuevo = [];
  for(let index = 0; index < array.length; index++){
      arrayNuevo[index] = array[index].toUpperCase();
  }
  return arrayNuevo;
}

module.exports = mutarArray;

