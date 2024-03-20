const primerArray = ["uno", "dos", "tres", true];
const nuevoElemento = 500;

function agregarAlPrincipio(array, Elemento) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    
    array[0] = Elemento;
    return array;
}

console.log(agregarAlPrincipio(primerArray, nuevoElemento));
