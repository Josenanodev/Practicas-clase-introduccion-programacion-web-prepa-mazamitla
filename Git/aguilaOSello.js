const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const resultados = [];

function determinarResultado() {
  const numeroAleatorio = Math.random();

  const esMenorA0_5 = numeroAleatorio < 0.5;
  const esMayorA0_5 = numeroAleatorio > 0.5;

  let resultado = undefined;

  if (esMenorA0_5) {
    resultado = "Aguila";
  } else if (esMayorA0_5) {
    resultado = "Sello";
  }
  return resultado;
}

function ejecutarExperimento(numeroDeVeces) {
  for (let i = 0; i < numeroDeVeces; i++) {
    const resultado = determinarResultado();
    resultados.push(resultado);
  }
}

function cuentaAguilas() {
  const aguilas = resultados.filter((resultado) => resultado === "Aguila");
  return aguilas.length;
}

function cuentaSellos() {
  const sellos = resultados.filter((resultado) => resultado === "Sello");
  return sellos.length;
}

function determinaPorcentajes(cantidadExperimentos) {
  ejecutarExperimento(cantidadExperimentos);
  const aguilas = cuentaAguilas();
  const sellos = cuentaSellos();
  const total = aguilas + sellos;
  const porcentajeAguilas = (aguilas / total) * 100;
  const porcentajeSellos = (sellos / total) * 100;
  console.log(`El porcentaje de aguilas es: ${porcentajeAguilas}%`);
  console.log(`El porcentaje de sellos es: ${porcentajeSellos}%`);
}

function ejecucionDePrograma() {
  readline.question(
    //Pregunto
    "Cuantas veces quieres ejecutar el experimento? ",
    function (respuesta) {
        //Respuesta del usuario
      const cantidadExperimentos = parseInt(respuesta);
      //Verifico que la respuesta sea un numero y que sea mayor a 0
      if (typeof cantidadExperimentos !== "number" || cantidadExperimentos < 1) {
        //Si no es un numero o es menor a 1, mando un mensaje de error y vuelvo a preguntar
        console.log("Por favor ingresa un número mayor a 0");
        ejecucionDePrograma();
        return;
      } else {
        determinaPorcentajes(cantidadExperimentos);
        readline.close();
      }
    }
  );
}

ejecucionDePrograma();
