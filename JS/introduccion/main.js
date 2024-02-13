//Variables
//Formas de escribir variables
//Camel Case (Recomendado) - Se escribe la primera palabra en minuscula y las demas en mayuscula (Ej: variableCamelCase)
//Snake Case - Se escribe todo en minuscula y se separa las palabras con un guion bajo (Ej: variable_snake_case)
//Pascal Case - Se escribe la primera letra de cada palabra en mayuscula (Ej: VariablePascalCase)
//Upper Case - Se escribe todo en mayuscula (Ej: VARIABLE_UPPER_CASE)
//Kebab Case (solo HTML y CSS) - Se escribe todo en minuscula y se separa las palabras con un guion medio (Ej: variable-kebab-case)
var variableVar = "Variable Var";
let variableLet = "Variable Let";
const variableConst = "Variable Const";

//Valores primitivos
let variableHola = "Hola";
let variableString = "Variable String";
let variableNumber = 10;
let variableBoolean = true;
let variableNull = null;
let variableUndefined = undefined;
let variableSymbol = Symbol("Variable Symbol");
let variableBigInt = 10n;

//Valores no primitivos
let variableObject = {
  propiedadUno: "Propiedad Uno",
  nombre: "Variable Object",
  valor: 10,
};
let variableArray = [1, 2, 3, 4, 5];
let variableFunction = function () {
  console.log("Variable Function");
};

//Funciones
function funcionNormal(parametro1, parametro2) {
  //Cuerpo de la funcion
  console.log(parametro1, parametro2);
  //Valor de retorno
  return parametro1 + parametro2;
}

const funcionAnonima = function (parametro1, parametro2) {
  console.log(parametro1, parametro2);
  return parametro1 + parametro2;
};

const funcionFlecha = (parametro1, parametro2) => {
  return parametro1 + parametro2;
};

const funcionFlechaCorta = (parametro1, parametro2) => parametro1 + parametro2;

console.log("inicio");
//Operadores
//Aritmeticos
// + Suma
let variableAritmetica = 10 + 10;
// - Resta
variableAritmetica = 10 - 10;
// * Multiplicacion
variableAritmetica = 10 * 10;
// / Division
variableAritmetica = 10 / 10;
// % Modulo
variableAritmetica = 10 % 4; // 10 / 4 = 2 y sobra 2
// ++ Incremento
variableAritmetica++;
// -- Decremento
variableAritmetica--;
// ** Exponenciacion
variableAritmetica = 10 ** 10;

//Asignacion
// = Asigna un valor a una variable
let variableAsignacion = 10;
// += Asigna un valor a una variable y le suma el valor que ya tenia
variableAsignacion += 10;
// -= Asigna un valor a una variable y le resta el valor que ya tenia
variableAsignacion -= 10;
// *= Asigna un valor a una variable y le multiplica el valor que ya tenia
variableAsignacion *= 10;
// /= Asigna un valor a una variable y le divide el valor que ya tenia
variableAsignacion /= 10;
// %= Asigna un valor a una variable y le saca el resto de la division con el valor que ya tenia
variableAsignacion %= 4;
// **= Asigna un valor a una variable y le eleva al valor que ya tenia
variableAsignacion **= 10;

//Relacionales logica
// == Compara si dos valores son iguales, igualando el tipo de dato
let variableRelacional = 10 == "10";
// === Compara si dos valores son iguales, sin igualar el tipo de dato
variableRelacional = 10 === "10";
//. != Compara si dos valores son diferentes, igualando el tipo de dato
variableRelacional = 10 != "10";
//. !== Compara si dos valores son diferentes, sin igualar el tipo de dato
variableRelacional = 10 !== "10";
// > Compara si un valor es mayor a otro
variableRelacional = 10 > 9;
// < Compara si un valor es menor a otro
variableRelacional = 10 < 10;
// >= Compara si un valor es mayor o igual a otro
variableRelacional = 10 >= 10;
// <= Compara si un valor es menor o igual a otro
variableRelacional = 10 <= 10;

//Logicos
// Y - AND - true && false = false
// O - OR - false || false = false
// && Compara si dos condiciones son verdaderas
let variableLogica = 10 == 10 && 10 === "10";
// || Compara si una de las dos condiciones es verdadera
variableLogica = 10 == 10 || 10 === "10";
//. ! Niega una condicion
variableLogica = !(10 == 10 && 10 === "10");

//Condicionales
// if - else if - else
if (10 === "10") {
  //Cuerpo del if

  console.log("Hola Mamá");

  //Cuerpo del if
}

let condicionUno = 10 === 100;
if (condicionUno) {
  //Cuerpo del if
} else {
  //Cuerpo del else
}

let condicionDos = 1 > 2;
let condicionTres = 3;
if (condicionDos) {
  //Cuerpo del if
} else if (condicionTres === 5) {
  //Cuerpo del else if
} else {
  //Cuerpo del else
}

// switch - case
let condicionSwitch = "X";
switch (condicionSwitch) {
  case "Hola":
    //Cuerpo del case
    break;
  case "Chau":
    //Cuerpo del case
    break;
  default:
    //Cuerpo del default
    break;
}

//Ciclos - Bucles
// for
for (let i = 0; i < 100; i++) {
  //Cuerpo del for
}

// while
let condicionWhile = true;
while (condicionWhile) {
  //Cuerpo del while
  condicionWhile = false;
}

// do while
let condicionDoWhile = true;
do {
  //Cuerpo del do while
  condicionDoWhile = false;
} while (condicionDoWhile);

//Hoisting
//Variable
variableHoisting = "Hola";
var variableHoisting;
//Funcion
funcionHoisting();
function funcionHoisting() {
  return "Funcion Hoisting";
}

//Scope
//Global
let variableGlobal = "Variable Global";
//Local
function funcionLocal() {
  let variableLocal = "Variable Local";
}

//Closures
function funcionClosure() {
  let variableClosure = "Variable Closure";
  return function () {
    return variableClosure;
  };
}

//Objetos
//Objeto Literal
let objetoLiteral = {
  //Key: value
  //Propiedad: valor
  nombre: "Objeto Literal",
  valor: 10,
};
//Objeto Instanciado
let objetoInstanciado = new Object();
objetoInstanciado.nombre = "Objeto Instanciado";
objetoInstanciado.valor = 10;

//Metodos
//Metodo Literal
let metodoLiteral = {
  nombre: "Metodo Literal",
  valor: 10,
  funcion: function () {
    console.log("Metodo Literal");
  },
};

//Metodo Instanciado
let metodoInstanciado = new Object();
metodoInstanciado.nombre = "Metodo Instanciado";
metodoInstanciado.valor = 10;
metodoInstanciado.funcion = function () {
  console.log("Metodo Instanciado");
};

//Arrays
//Array Literal
let arrayLiteral = [1, 2, 3, 4, 5];
//Array Instanciado
let arrayInstanciado = new Array(1, 2, 3, 4, 5);

if (codicionUno) {
} else if (condicionDos) {
} else if (condiconTres) {
} else {
}

switch (true) {
  case numero > 3:
    //Cuerpo del case
    break;
  case "alicia":
    //Cuerpo del case
    break;
  case "pedro":
    //Cuerpo del case
    break;
  case "maria":
    //Cuerpo del case
    break;
  default:
    //Cuerpo del default
    break;
}


