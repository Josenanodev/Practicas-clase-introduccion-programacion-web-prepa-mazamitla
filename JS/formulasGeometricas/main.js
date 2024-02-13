function calculaVolumenDePiramide(altura, lado) {
  return (lado * lado * altura) / 3;
}

function obtenerValoresDeLosInputs() {
  let elementoAltura = document.getElementById("altura");
  let altura = elementoAltura.value;
  let elementoLado = document.getElementById("lado");
  let lado = elementoLado.value;
  const objetoDeRespuesta = {
    altura: altura,
    lado: lado,
  };
  return objetoDeRespuesta;
}

function mostrarResultado(resultado) {
  let elementoResultado = document.getElementById("resultado");
  elementoResultado.value = resultado;
}

function calcular() {
  const valores = obtenerValoresDeLosInputs();
  const volumen = calculaVolumenDePiramide(valores.altura, valores.lado);
  mostrarResultado(volumen);
}