let reservacion = {
  estatus: "confirmada",
  habitacion: "101",
  infomacionDelCliente: {
    nombre: "Juan Perez",
    edad: 25,
    identificacion: "1234567890",
    numeroDeTelefono: "1234567890",
  },
  fechas: {
    confirmacion: "2020-03-07",
    llegada: "2020-10-10",
    salida: "2020-10-15",
  },
  informacionDePago: {
    costoTotal: 2600,
    metodo: "Transferencia",
    anticipos: [
      {
        fecha: "2020-10-11",
        cantidad: 500,
      },
      {
        fecha: "2020-10-11",
        cantidad: 300,
      },
    ],
  },
  incluyeMascotas: false,
  cantidadDePersonas: 3,
};
