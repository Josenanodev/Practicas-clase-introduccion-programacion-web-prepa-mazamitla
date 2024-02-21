const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// forEach: Para cada uno
array.forEach((elemento) => console.log(elemento));

function condicion(numero) {
  return numero < 5;
}

// every: Todos el return debe ser true o false
const todosCumplenCondicion = array.every(condicion);

// console.log("todosCumplenCondicion: ", todosCumplenCondicion);

// some: Alguno el return debe ser true o false
const algunoCumpleCondicion = array.some(condicion);

// console.log("algunoCumpleCondicion: ", algunoCumpleCondicion);

const arrayDesordenadoDeStrings = ["Derek", "David", "Angel", "Angel Rocha"];

// sort: Ordenar el return debe ser 1, -1 o 0
const arrayOrdenado = arrayDesordenadoDeStrings.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});

console.log("arrayOrdenado: ", arrayOrdenado);

// map: Mapear o transformar, el return es el nuevo valor
const arrayDeMinusculas = ["a", "b", "c", "d", "e"];

let arrayDeMayusculas = [];

// for (let i = 0; i < arrayDeMinusculas.length; i++) {
//   const elemento = arrayDeMinusculas[i];
//   //tuUpperCase: Convertir a mayusculas un string
//   arrayDeMayusculas[i] = elemento.toUpperCase();
// }

arrayDeMayusculas = arrayDeMinusculas.map((elemento) => {
  elemento.toUpperCase();
});

console.log("arrayDeMayusculas: ", arrayDeMayusculas);

const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const arrayDeNumerosAlCuadrado = arrayDeNumeros.map((numero) => numero + 5);

console.log("arrayDeNumerosAlCuadrado: ", arrayDeNumerosAlCuadrado);

// flat: Aplanar, el parametro indica el nivel de profundidad

// const arrayDeArrays = [[1, 2], [3, 4], [5, 6]];
const arrayDeArraysDeArrays = [
  [[1, 2, 3], 2],
  [3, 4],
  [5, 6],
  [7, 8, 9, 10],
];

const arrayAplanado = arrayDeArraysDeArrays.flat(2);

// for (let i = 0; i < arrayDeArrays.length; i++) {
//   const array = arrayDeArrays[i];
//   for (let j = 0; j < array.length; j++) {
//     const elemento = array[j];
//     arrayAplanado.push(elemento);
//   }
// }

console.log("arrayAplanado: ", arrayAplanado);

// filter: Filtrar el return debe ser true o false

// const numerosFiltrados = [];

function condicionesDeFiltrado(numero) {
  return numero < 10;
}

const numerosFiltradosConFilter = arrayDeNumeros.filter(condicionesDeFiltrado);

// for (let i = 0; i < arrayDeNumeros.length; i++) {
//     const numero = arrayDeNumeros[i];
//     if (numero < 10) {
//         numerosFiltrados[i] = numero;
//     }
// }

console.log("numerosFiltradosConFilter: ", numerosFiltradosConFilter);
