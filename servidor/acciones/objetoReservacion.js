let reservacion = {
    informacionCliente: {
        nombre: "Angel Romo Godoy",
        telefono: "3318667585",
        edad: 25
    },

    informacionReservacion: {
        status: false,
        fechaDeReserva: "2024-02-20",
        cantidadDePersonas: 2,
        habitacion: "101",
        fechaDeLlegada: "2024-03-20",
        fechaDeSalida: "2024-03-23",
        incluyeMascotas: false
    },
    
    informacionPago: {
        metodo: "Transferencia",
        monto: 2600,
        anticipos: [
            {
                fecha: "2024-02-20",
                cantidad: 1000
            }
        ]
    }
}

function cambiarHabitacion(reservacion, nuevaHabitacion) {
    reservacion.informacionReservacion.habitacion = nuevaHabitacion
}

cambiarHabitacion(reservacion, "102")

console.log(reservacion.informacionReservacion.habitacion)