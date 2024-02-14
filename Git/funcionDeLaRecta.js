//El readline es necesario para poder hacer preguntas al usuario
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Esta variable va a guardar la funcion de la recta cuando la generemos
const funcionDeLaRecta = function () {};

rl.question(
  "Ingresa el valor del primer punto separando por comas (ejemplo: 2,5): ",
  (answer) => {
    //Van solicitar el primer punto
  }
);

rl.question(
  "Ingresa el valor del segundo punto separando por comas (ejemplo: 2,5): ",
  (answer) => {
    //Van solicitar el segundo punto
  }
);

rl.question("Ingresa el valor de x para calcular el valor de y: ", (answer) => {
  //Van solicitar el valor de x
  //Aqui va a ir la funcion que calcula el valor de y
});

function convierteArrayDeStringsANumeros(arrayDeStrings) {
  const arrayDeNumeros = [];
  for (let i = 0; i < arrayDeStrings.length; i++) {
    const elementoString = arrayDeStrings[i];
    //parseInt convierte un string a un numero
    const elementoNumber = parseInt(elementoString);
    arrayDeNumeros[i] = elementoNumber;
  }
  return arrayDeNumeros;
}

// 658432,873928 = ["658432", "873928"]
function validaRespuestaDePuntoDeUsuario(punto) {
  const esValida = true;
  const tieneComa = punto.includes(",");
  if (tieneComa === false) {
    console.log("No tiene comas");
    esValida = false;
    return;
  }
  const arraySeParadoPorComas = punto.split(",");
  const tieneSoloUnaComa = arraySeParadoPorComas.length === 2;
  if (tieneSoloUnaComa === false) {
    console.log("Tiene más de una coma");
    esValida = false;
    return;
  }
  const arrayDeNumeros = convierteArrayDeStringsANumeros(arraySeParadoPorComas);
  //   const losElementosDelArraySonNumeros = arrayDeNumeros.every(
  //     (elemento) => typeof elemento === "number"
  //   );
  // Este codigo es equivalente al siguiente for
  const losElementosDelArraySonNumeros = true;
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    const elemento = arrayDeNumeros[i];
    const esNumero = typeof elemento === "number";
    if (esNumero === false) {
      losElementosDelArraySonNumeros = false;
      break;
    }
  }
  if (losElementosDelArraySonNumeros === false) {
    console.log("No todos los elementos son números");
    esValida = false;
    return;
  }
  return esValida;
}

function separaPuntoPorSusComas(punto) {
  const esValido = validaRespuestaDePuntoDeUsuario(punto);
  if (esValido === false) {
    return;
  }
  const arraySeParadoPorComas = punto.split(",");
  const arrayDeNumeros = convierteArrayDeStringsANumeros(arraySeParadoPorComas);
  return arrayDeNumeros;
}

function calculaPendienteDeLaRecta(punto1, punto2) {
  //Aqui va a ir la funcion que calcula la pendiente que es m = (y2 - y1) / (x2 - x1)
  const [x1, y1] = punto1;
  const [x2, y2] = punto2;
  const numerador = y2 - y1;
  const denominador = x2 - x1;
  const pendiente = numerador / denominador;
  return pendiente;
}

function calculaFactorBDeLaRecta(punto, pendiente) {
  //Aqui va a ir la funcion que calcula el factor b que es b = y - mx
  const [x, y] = punto;
  const factorB = y - pendiente * x;
  return factorB;
}

function calculaYParaUnaX(pendiente, factorB, x) {
  const y = pendiente * x + factorB;
  return y;
}

function generaFuncionDeLaRecta(punto1, punto2) {
  const punto1EsValido = validaRespuestaDePuntoDeUsuario(punto1);
  const punto2EsValido = validaRespuestaDePuntoDeUsuario(punto2);
  //Hasta aqui nos quedamos
}

//Consigue respuesta de usuario
//Valida respuesta de usuario, si la respuesta no es valida repite el proceso con un funcion recursiva (anidar la funcion dentro de si misma)
//Convierte respuesta de usuario a un array de numeros
//Calcula pendiente de la recta
//Calcula factor b de la recta
//Genera funcion de la recta
//Imprime la funcion de la recta
//Pregunta por valores de x y responde con valores de y
//Si el usuario escribe "salir" termina el programa
