import Compra from "./Compra.js";

document.querySelector("#enviar").addEventListener("click", (event) => {
  var numAzar = document.promocion.num.value;
  var valorCompra = document.promocion.totalCompra.value;
  const compraClass = new Compra(numAzar, valorCompra);
  compraClass.promo();

  var descuento = compraClass.getPromo();
  document.getElementById("valorDescuento").textContent ="el Valor que se descuenta a su compra es: "+ descuento;
})