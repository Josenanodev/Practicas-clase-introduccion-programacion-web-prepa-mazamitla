function mutarArray(array) {
    const arrayNuevoDeNumeros = [];
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        const numero = Number(elemento);
        const numeroSumadoConTres = numero + 3;
        arrayNuevoDeNumeros[i] = numeroSumadoConTres;
    }
    return arrayNuevoDeNumeros
}

module.exports = mutarArray;

//Angle String(valor)
//David Invertir array con for
//Rocha .toUpperCase()