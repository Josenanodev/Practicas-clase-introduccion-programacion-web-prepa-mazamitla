const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// forEach: Para cada uno
array.forEach((elemento) => console.log(elemento));

function condicion(numero) {
  return numero < 5;
}

// every: Todos
const todosCumplenCondicion = array.every(condicion);

// console.log("todosCumplenCondicion: ", todosCumplenCondicion);

// some: Alguno
const algunoCumpleCondicion = array.some(condicion);

// console.log("algunoCumpleCondicion: ", algunoCumpleCondicion);

const arrayDesordenadoDeStrings = ["Derek", "David", "Angel", "Angel Rocha"];

// sort: Ordenar
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
