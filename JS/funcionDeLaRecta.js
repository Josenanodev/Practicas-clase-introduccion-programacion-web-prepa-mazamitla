const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let primerPunto = undefined;
let segundoPunto = undefined;
const funcionDeLaRecta = {
  pendiente: undefined,
  factorB: undefined,
  expresion: undefined,
  metodoAlmacenado: () => {
    console.log("No se ha generado una funcion de la recta");
    return undefined;
  },
};
const formatoEjemploDePuntoValido = "2,5";

function convierteArrayDeStringsANumeros(arrayDeStrings) {
  const arrayDeNumeros = [];
  for (let i = 0; i < arrayDeStrings.length; i++) {
    const elementoString = arrayDeStrings[i];
    const elementoNumber = Number(elementoString);
    arrayDeNumeros[i] = elementoNumber;
  }
  return arrayDeNumeros;
}

function conviertePuntoSeUsuarioAPuntoNumerico(punto) {
  const arraySeParadoPorComas = punto.split(",");
  const arrayDeNumeros = convierteArrayDeStringsANumeros(arraySeParadoPorComas);
  return arrayDeNumeros;
}

function esNumeroValido(numero) {
  const esTipoNumero = typeof numero === "number";
  //NaN: Not a Number
  const noEsNaN = !isNaN(numero);
  return esTipoNumero && noEsNaN;
}

function validaRespuestaDePuntoDeUsuario(punto) {
  const puntoNumerico = conviertePuntoSeUsuarioAPuntoNumerico(punto);
  let esValido = true;
  const puntoContieneSoloDosElementos = puntoNumerico.length === 2;
  const todosLosElementosSonNumerosValidos = puntoNumerico.every((elemento) =>
    esNumeroValido(elemento)
  );
  if (!puntoContieneSoloDosElementos) {
    console.log(
      `El punto ${punto} no es valido, el formato debe ser ${formatoEjemploDePuntoValido}`
    );
    esValido = false;
  } else if (!todosLosElementosSonNumerosValidos) {
    console.log(`El punto ${punto} no es valido, los valores deben ser numeros`);
    esValido = false;
  }
  return esValido;
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

function generaFuncionDeLaRecta(puntoNumerico1, puntoNumerico2) {
  const pendiente = calculaPendienteDeLaRecta(puntoNumerico1, puntoNumerico2);
  const factorB = calculaFactorBDeLaRecta(puntoNumerico1, pendiente);
  funcionDeLaRecta.pendiente = pendiente;
  funcionDeLaRecta.factorB = factorB;
  funcionDeLaRecta.expresion = `y = ${pendiente.toFixed(2)}x + ${factorB.toFixed(2)}`;
  funcionDeLaRecta.metodoAlmacenado = (x) => {
    return calculaYParaUnaX(pendiente, factorB, x);
  };
  console.log(`La funcion de la recta es: ${funcionDeLaRecta.expresion}`);
}

function solicitaPrimerPunto() {
  rl.question(
    "Ingresa el valor del primer punto separando por comas (ejemplo: 2,5): ",
    (answer) => {
      const laRespuestaEsValida = validaRespuestaDePuntoDeUsuario(answer);
      if (laRespuestaEsValida) {
        primerPunto = conviertePuntoSeUsuarioAPuntoNumerico(answer);
        solicitaSegundoPunto();
      } else {
        solicitaPrimerPunto();
      }
    }
  );
}

function solicitaSegundoPunto() {
  rl.question(
    "Ingresa el valor del segundo punto separando por comas (ejemplo: 2,5): ",
    (answer) => {
      const laRespuestaEsValida = validaRespuestaDePuntoDeUsuario(answer);
      segundoPunto = conviertePuntoSeUsuarioAPuntoNumerico(answer);
      const xDelSegundoPuntoEsIgualAlXDelPrimerPunto = primerPunto[0] === segundoPunto[0];
      if (xDelSegundoPuntoEsIgualAlXDelPrimerPunto) {
        console.log(
          "El valor de x del segundo punto no puede ser igual al del primer punto"
        );
        solicitaSegundoPunto();
        return;
      } else if (laRespuestaEsValida) {
        generaFuncionDeLaRecta(primerPunto, segundoPunto);
        solicitaValorDeX();
      } else {
        solicitaSegundoPunto();
      }
    }
  );
}

function elValorDeXEsValido(x) {
  const valorNumericoDeX = parseInt(x);
  const esNumero = esNumeroValido(valorNumericoDeX);
  if (!esNumero) {
    console.log("El valor de x no es valido, debe ser un numero");
  }
  return esNumero;
}

function solicitaValorDeX() {
  rl.question(
    "Ingresa el valor de x para calcular el valor de y, o escriba 'salir' para cerrar el programa: ",
    (answer) => {
      if (answer === "salir") {
        console.log("Hasta luego");
        rl.close();
        return;
      }
      const xEsValido = elValorDeXEsValido(answer);
      if (xEsValido) {
        const valorDeY = funcionDeLaRecta.metodoAlmacenado(answer);
        console.log(`El valor de y es: ${valorDeY}`);
      }
      solicitaValorDeX();
    }
  );
}

solicitaPrimerPunto();
