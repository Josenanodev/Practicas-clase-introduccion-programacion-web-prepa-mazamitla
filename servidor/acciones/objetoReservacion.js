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
        return "Confirmada";
    } 
    
    else {
        reserva.informacionReservacion.estado = false;
        return "No confirmada";
    }
}

function calcularSaldo(reserva) {
    const saldoTotal = reserva.informacionPago.monto;
    const totalAnticipos = reserva.informacionPago.anticipos.reduce((total, anticipo) => total + anticipo.cantidad, 0);
    const saldoRestante = saldoTotal - totalAnticipos;
    return saldoRestante;
}

function calcularNoches(reserva) {
    const inicio = new Date(reserva.informacionReservacion.fechaDeLlegada);
    const fin = new Date(reserva.informacionReservacion.fechaDeSalida);
    const diferenciaEnMilisegundos = fin - inicio;
    const milisegundosPorDia = 86400000;
    const numeroNoches = Math.floor(diferenciaEnMilisegundos / milisegundosPorDia);

    return numeroNoches;
}

console.log("Anticipos en la reservacion: ", agregarAnticipo(reservacion, "2024-02-25", 1000))
console.log("Estado de la reservacion: ", cambiarEstadoReservacion(reservacion, true))
console.log("Saldo restante: " ,calcularSaldo(reservacion));
console.log("Numero de noches: ", calcularNoches(reservacion));