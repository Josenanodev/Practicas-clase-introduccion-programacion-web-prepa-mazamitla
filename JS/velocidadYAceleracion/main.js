function calcularDistancia(posicionInicial, posicionFinal) {
  return posicionFinal - posicionInicial;
}

function calcularTiempo(tiempoInicial, tiempoFinal) {
  return tiempoFinal - tiempoInicial;
}

function calcularVelocidad(distancia, tiempo) {
  return distancia / tiempo;
}

function calcularAceleracion(velocidad, tiempo) {
  return velocidad / tiempo;
}

function obtenerValoresDeLosInputs() {
  const posicionInicialString = document.getElementById("posicion-i").value;
  const posicionUnoString = document.getElementById("posicion-1").value;
  const posicionDosString = document.getElementById("posicion-2").value;
  const posicionFinalString = document.getElementById("posicion-f").value;
  const tiempoInicialString = document.getElementById("tiempo-i").value;
  const tiempoUnoString = document.getElementById("tiempo-1").value;
  const tiempoDosString = document.getElementById("tiempo-2").value;
  const tiempoFinalString = document.getElementById("tiempo-f").value;
  if (!posicionInicialString) {
    alert("Falta la posición inicial");
  } else if (!posicionUnoString) {
    alert("Falta la posición uno");
  } else if (!posicionDosString) {
    alert("Falta la posición dos");
  } else if (!posicionFinalString) {
    alert("Falta la posición final");
  } else if (!tiempoInicialString) {
    alert("Falta el tiempo inicial");
  } else if (!tiempoUnoString) {
    alert("Falta el tiempo uno");
  } else if (!tiempoDosString) {
    alert("Falta el tiempo dos");
  } else if (!tiempoFinalString) {
    alert("Falta el tiempo final");
  } else {
    const posicionInicial = Number(posicionInicialString);
    const posicionUno = Number(posicionUnoString);
    const posicionDos = Number(posicionDosString);
    const posicionFinal = Number(posicionFinalString);
    const tiempoInicial = Number(tiempoInicialString);
    const tiempoUno = Number(tiempoUnoString);
    const tiempoDos = Number(tiempoDosString);
    const tiempoFinal = Number(tiempoFinalString);
    const objetoDeRespuesta = {
      posicionInicial: posicionInicial,
      posicionUno: posicionUno,
      posicionDos: posicionDos,
      posicionFinal: posicionFinal,
      tiempoInicial: tiempoInicial,
      tiempoUno: tiempoUno,
      tiempoDos: tiempoDos,
      tiempoFinal: tiempoFinal,
    };
    return objetoDeRespuesta;
  }
}

function calcularResultados() {
  const valores = obtenerValoresDeLosInputs();
  if (valores) {
    const distanciaInicial = calcularDistancia(
      valores.posicionInicial,
      valores.posicionUno
    );
    const distanciaFinal = calcularDistancia(valores.posicionDos, valores.posicionFinal);
    const tiempoInicial = calcularTiempo(valores.tiempoInicial, valores.tiempoUno);
    const tiempoFinal = calcularTiempo(valores.tiempoDos, valores.tiempoFinal);
    const velocidadInicial = calcularVelocidad(distanciaInicial, tiempoInicial);
    const velocidadFinal = calcularVelocidad(distanciaFinal, tiempoFinal);
    const diferenciaDeVelocidades = velocidadFinal - velocidadInicial;
    const diferenciaDeTiempos = valores.tiempoFinal - valores.tiempoInicial;
    const aceleracion = calcularAceleracion(diferenciaDeVelocidades, diferenciaDeTiempos);
    document.getElementById("velocidad-i").value = velocidadInicial.toFixed(2);
    document.getElementById("velocidad-f").value = velocidadFinal.toFixed(2);
    document.getElementById("aceleracion").value = aceleracion.toFixed(2);
  }
}


