import Llanta from "./Llanta.js";

document.querySelector("#cotizar").addEventListener("click", (event)=>{
  var llantas = document.compra.numLlantas.value;
  const LlantaClass = new Llanta(llantas);
  LlantaClass.cotizacion();
  var total = LlantaClass.getCotizacion();
  document.getElementById('totalPagar').textContent= "El total a pagar es: "+ total;
});