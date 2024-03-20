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
        fechaDeLlegada: "2024-03-20",
        fechaDeSalida: "2024-03-23",
        incluyeMascotas: false,
        serviciosAdicionales: ["Decoracion Romantica", "Cargas de leña adicionales: (2)"],
        estado: false,
    },
    
    informacionPago: {
        metodo: "Transferencia",
        monto: 2600,
        anticipos: [{fecha: "2024-02-20", cantidad: 1000}],
    }
}