const array = ["uno", "dos", "tres", true];
const nuevoElemento = 500;

function agregarAlPrincipio(array, nuevoElemento) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    
    array[0] = nuevoElemento;
    return array;
}

console.log(agregarAlPrincipio(array, nuevoElemento));
