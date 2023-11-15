import Calculadora from "./Calculadora.js";

document.querySelector("#enviar").addEventListener("click", (event) => {
  var genero = document.calculo.genero.value;
  var edad = document.calculo.edad.value;
  const calculadoraClass = new Calculadora(edad, genero)
  calculadoraClass.calculoPulsaciones();
  var resultado = calculadoraClass.getPulsaciones();
  document.getElementById("resultado").textContent = 
  "Sus pulsaciones son de: "+ resultado + " por seg"
});