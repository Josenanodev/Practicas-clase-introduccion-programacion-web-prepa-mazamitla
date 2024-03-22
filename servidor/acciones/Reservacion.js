let reservacion = {
    estatus: "confirmada",
    habitacion: "101",
    informacionDelCliente:{
        nombre: "Pedro",
        edad: 66,
        identificacion: "123456789",
        numeroDeTelefono: "2123456789",
    },
    fechas: {
        confirmacion: "2022-09-13",
        llegada: "2022-10-10",
        salida: "2022-10-13",
    },
    informacionDePago: {
        anticipos: [
            {
                fecha: "2020-10-09",
                catidad: "300",
            },
        ],
    },
    incluyeMascotas: false,
    CantidadDePersonas: "4",
}

//Funcion que cambie de habitacion, primer parametro reservacion,

function CambiaHabitacion(Reservacion, nuevaHabitacion) {
    reservacion.habitacion = nuevaHabitacion
}

//Funcion para agregar anticipos
function agregarAnticipo(reserva, nuevaCantidad) {
    reserva.informacionDePago.anticipos.push({
        fecha: reserva.informacionDePago.anticipos[0].fecha,
        cantidad: nuevaCantidad
    });
}

let nuevaCantidadAnticipo = 700;

agregarAnticipo(reservacion, nuevaCantidadAnticipo);

//Funcion Cambiar Status como "Confirmada" o "Disponible"
function verificarEstadoHabitacion(reserva) {
    if (reserva.estatus === "confirmada") {
        console.log("El cliente está en la habitación. Habitación ocupada.");
        return "Habitación ocupada";
    } else {
        console.log("La habitación está disponible.");
        return "Habitación disponible";
    }
}
function cambiarEstatusHabitacion(reserva) {
    if (reserva.estatus !== "confirmada") {
        reserva.estatus = "confirmada";
        console.log("El estatus de la habitación se ha cambiado a confirmada.");
    } else {
        console.log("La habitación ya está confirmada.");
    }
}
//Funcion para calcular pago pendiente

//Funcion para calcular cantidad de noches 