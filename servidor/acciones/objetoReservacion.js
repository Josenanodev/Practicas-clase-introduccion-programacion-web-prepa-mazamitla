let reservacion = {
    informacionCliente: {
        nombre: "Angel Romo Godoy",
        edad: 25,
        correoElectronico: "angelromogodoy@gmail.com",
        telefono: "3318667585",
        direccion: "Lazaro cardenas 77, Valle De Juarez",
        documentoIdentidad: "1234567890",
    },

    informacionReservacion: {
        fechaDeReserva: "2024-02-20",
        habitacion: "101",
        cantidadDePersonas: 2,
        fechaDeLlegada: "2024-07-15",
        fechaDeSalida: "2024-07-17",
        incluyeMascotas: false,
        serviciosAdicionales: ["Decoracion Romantica", "Cargas de leña adicionales: (2)"],
        estado: false,
    },
    
    informacionPago: {
        metodo: "Transferencia",
        monto: 3200,
        anticipos: [{fecha: "2024-02-20", cantidad: 1000}],
    }
}

function agregarAnticipo(reservacion, fechaDeAnticipo, montoDeAnticipo) {
    const anticipoNuevo = {fecha: fechaDeAnticipo, cantidad: montoDeAnticipo};
    reservacion.informacionPago.anticipos.push(anticipoNuevo)
    return reservacion.informacionPago.anticipos;
}

function cambiarEstadoReservacion(reserva, confirmacion) {
    if (confirmacion === true) {
        reserva.informacionReservacion.estado = true;
        return "Reserva confirmada";
    } 
    
    else {
        reserva.informacionReservacion.estado = false;
        return "Reserva no confirmada";
    }
}

function calcularSaldo(reservacion) {
    const saldoTotal = reservacion.informacionPago.monto;
    const totalAnticipos = reservacion.informacionPago.anticipos.reduce((total, anticipo) => total + anticipo.cantidad, 0);
    const saldoRestante = saldoTotal - totalAnticipos;
    return saldoRestante;
}

console.log(agregarAnticipo(reservacion, "2024-02-25", 1000))
console.log(cambiarEstadoReservacion(reservacion, false))
console.log(calcularSaldo(reservacion));