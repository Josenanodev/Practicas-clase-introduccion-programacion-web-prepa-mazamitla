const array = ["tamales, elotes"]
function arrayNuevo(array){
const arrayNuevo = []
for (let index = 0; index < array.length; index++) {
    arrayNuevo[index] = array[index].toUpperCase();
    return arrayNuevo
}
}