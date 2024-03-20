// //Entradas
// const array = ["uno", "dos", true]
// const nuevoElemento = 500

// //Salida 1
// const arrayNuevo = ["uno", "dos", true, 500]
// //Salida 2
// const arrayNuevo2 = [500, "uno", "dos", true]

// //Tip acceder a elemento de array
// array[numero] = valesAlgo


function agregarElementoAArray(array, elementoNuevo){
    const longitudDelArray = array.length
    array[longitudDelArray] = elementoNuevo
    return array
}

const array = [1, "2", true, {}, "hola", "😁"]
const elementoNuevo = "adios"
array.push(elementoNuevo)
console.log(array)