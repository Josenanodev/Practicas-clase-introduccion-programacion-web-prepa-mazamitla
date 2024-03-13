let array = ["hola", "mundo", "luminetz"];

function convertirAMayusculas(array) {
    let arrayNuevo = [];
    for (let i = 0; i < array.length; i++) {
        arrayNuevo[i] = array[i].toUpperCase();
    }
    return arrayNuevo;
}
