import Compra from "./factura.js";

document.querySelector("#contador").addEventListener("click", (event) => {
  var montoCompra = document.compraPiezas.monto.value;
  const compraClass = new Compra(montoCompra);
  compraClass.credito();
  var inversioncompra = compraClass.getInversion();
  var totalInversion = compraClass.getTotalInversion();
  var prestamo = compraClass.getPrestamo();
  var totalPrestamo = compraClass.getTotalPrestamo();
  var intereses = compraClass.getInteresFabricante();
  document.getElementById('inversionCompra').textContent = 
  "La inversion del 55% es: "+ inversioncompra;
  document.getElementById('totalInversionCompra').textContent = 
  "el saldo restante es:  "+ totalInversion;
  document.getElementById('prestamo').textContent = 
  "El valor del prestamo del 30% es: "+ prestamo;
  document.getElementById('totalPrestamo').textContent = 
  "El saldo restante es: "+ totalPrestamo;
  document.getElementById('intereses').textContent = 
  "El valor del interes al fabricante es: "+ intereses;
});