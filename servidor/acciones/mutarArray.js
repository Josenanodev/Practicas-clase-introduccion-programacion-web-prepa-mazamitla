function mutarArray(array) {
  // let sumaTotal = 0;
  // for (let index = 0; index < array.length; index++) {
  //   const elemento = array[index];
  //   sumaTotal = sumaTotal + elemento;
  // }
  // return sumaTotal;
  //   redeuce(funcionDelReduce, valorInicial)
  //  funcionDelReduce(suma, elementoActual)
  return array.reduce((suma, elementoActual) => suma + elementoActual, 0);
}

const array = [1, 2, 3, 4, 5];
console.log(mutarArray(array));

// module.exports = mutarArray;

//Angle String(valor)
//David Invertir array con for
//Rocha .toUpperCase()
