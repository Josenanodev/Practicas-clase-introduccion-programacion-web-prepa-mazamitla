function repiteMensajes(mensaje, repeticiones) {
  if (mensaje && repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
      console.log(mensaje, i);
    }
  } else {
    console.log("Faltan datos");
  }
}

//SQL fechas tienen el formato 2023-11-21
const stringSql = "2023-11-21";
const arrayString = stringSql.split("-")[("2023", "11", "21")];

const fecha = new Date();

function sqlToJsDate(sqlDate) {
  let dateArray = sqlDate.split("-");
  //Es necesario restar 1 al mes ya que el mes de Enero comienza con el valor 0
  const yearString = dateArray[0];
  const year = Number(yearString);
  const monthString = dateArray[1];
  const monthIndex = Number(monthString) - 1;
  const dayString = dateArray[2];
  const day = Number(dayString);
  let jsDate = new Date(year, monthIndex, day);
  return jsDate;
}
