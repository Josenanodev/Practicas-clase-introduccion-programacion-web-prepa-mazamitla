let arrayMin = ["Torutga"];
let arrayEquis = ["Pelon"];

function convertirMayusculas(arrayMinuscula) {
    let arrayMayuscula = [];
for (let index = 0; index < arrayMinuscula.length; index++) {
    arrayMayuscula[index] = arrayMinuscula[index].toUpperCase();
    return arrayMayuscula;
}}
console.log("El nuevo array es:" + convertirMayusculas(arrayEquis));
