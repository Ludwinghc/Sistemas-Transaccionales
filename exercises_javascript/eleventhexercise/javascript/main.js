import Bosque from "./Bosque.js";

document.querySelector('#enviar').addEventListener('click', (event) => {
  var pino = document.calculosiembra.pinos.value;
  var oyameles = document.calculosiembra.oyamel.value;
  var cedros = document.calculosiembra.cedro.value;
  var areas = document.calculosiembra.area.value;
  const bosqueClass = new Bosque(pino, oyameles, cedros, areas)
  bosqueClass.calculo();
});