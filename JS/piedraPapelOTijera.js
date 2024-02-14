const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Piedra, papel o tijera? ", function (respuesta) {
//   console.log("Tu respuesta es: " + respuesta);
//   rl.close();
// });

const jugadasPosibles = ["piedra", "papel", "tijera"];

function jugadaMaquina() {
  const numeroAleatorio = Math.floor(Math.random() * 3);
  const jugada = jugadasPosibles[numeroAleatorio];
  return jugada;
}

function compararJugadas(jugadaUsuario, jugadaMaquina) {
  if (jugadaUsuario === jugadaMaquina) {
    console.log("Empate");
  } else if (jugadaUsuario === "papel") {
    if (jugadaMaquina === "piedra") {
      console.log("Ganaste");
    } else if (jugadaMaquina === "tijera") {
      console.log("Perdiste");
    }
  } else if (jugadaUsuario === "piedra") {
    if (jugadaMaquina === "tijera") {
      console.log("Ganaste");
    } else if (jugadaMaquina === "papel") {
      console.log("Perdiste");
    }
  } else if (jugadaUsuario === "tijera") {
    if (jugadaMaquina === "papel") {
      console.log("Ganaste");
    } else if (jugadaMaquina === "piedra") {
      console.log("Perdiste");
    }
  }
}

function obtenerJugadaUsuario() {
  rl.question("Piedra, papel o tijera? ", function (respuesta) {
    const jugadaUsuario = respuesta.toLocaleLowerCase();
    const laJugadaDeUsuarioEsValida = jugadasPosibles.includes(jugadaUsuario);
    if (laJugadaDeUsuarioEsValida) {
      const jugadaDeLaMaquina = jugadaMaquina();
      console.log(`La maquina jugó ${jugadaDeLaMaquina}`);
      compararJugadas(jugadaUsuario, jugadaDeLaMaquina);
      rl.close();
    } else {
      console.log(
        "Jugada invalida, haz escogido " +
          jugadaUsuario +
          " por favor escoge piedra, papel o tijera"
      );
      obtenerJugadaUsuario();
    }
  });
}

obtenerJugadaUsuario();
