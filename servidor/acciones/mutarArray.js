let arrayOriginal = ["hola", "mundo", "luminetz"];

function convertirAMayusculas(array) {
    let arrayNuevo = [];
    for (let i = 0; i < array.length; i++) {
        arrayNuevo[i] = array[i].toUpperCase();
    }
    return arrayNuevo;
}


console.log("El array es:" + convertirAMayusculas(arrayOriginal))