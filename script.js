function calcularPrecio(precioUnitario, cantidad) {
  const total = precioUnitario * cantidad;
  return total;
}
function puedeReservar(tazasDisponibles) {
  return tazasDisponibles > 50;
}

function puedeReservar(cantidad) {
  return cantidad <= 50;
}

const botonReservar = document.querySelector('#boton-reservar');
const contadorTazas = document.querySelector('#contador-tazas');

botonReservar.addEventListener('click', function() {
  const tazasActuales = Number(contadorTazas.textContent);

  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    console.log('Reserva realizada. Tazas restantes: ' + contadorTazas.textContent);
  } else {
    botonReservar.textContent = 'sin cupos';
    botonReservar.disabled = true;
    console.log('No se pueden reservar más tazas. No hay cupos disponibles.');
  } 
});




