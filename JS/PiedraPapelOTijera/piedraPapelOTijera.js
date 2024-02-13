const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let jugadaUsuario = "";
let jugadaMaquina = "";
let resultado = "";

const jugadasPosibles = ["piedra", "papel", "tijera"];

function obtenerJugadaMaquina() {
  const indice = Math.floor(Math.random() * 3);
  return jugadasPosibles[indice];
}

function obtenerJugadaUsuario() {
  rl.question("Elige piedra, papel o tijera: ", (respuesta) => {
    jugadaUsuario = respuesta;
    if (jugadasPosibles.includes(jugadaUsuario) === false) {
      console.log(
        `Elegiste ${jugadaUsuario} que es una opción inválida, solo puedes elegir piedra, papel o tijera. Intenta de nuevo.`
      );
      obtenerJugadaUsuario();
    } else {
      jugadaMaquina = obtenerJugadaMaquina();
      resultado = obtenerResultado(jugadaUsuario, jugadaMaquina);
      console.log(`Jugada de la máquina es ${jugadaMaquina}`);
      console.log(resultado);
      rl.close();
    }
  });
}

function obtenerResultado(jugadaUsuario, jugadaMaquina) {
  if (jugadaUsuario === jugadaMaquina) {
    return "Empate";
  } else if (
    (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
    (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
  ) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}

obtenerJugadaUsuario();
