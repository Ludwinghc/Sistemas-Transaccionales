function ordenar(){
  var num1 = document.orden.n1.value;
  var num2 = document.orden.n2.value;

  if (num1 < num2) {
    document.getElementById("primero").textContent = "el primer número es: "+ num1;
    document.getElementById("segundo").textContent = "el segundo número es: "+ num2;
  } else {
    document.getElementById("primero").textContent = "el primer número es: "+ num2;
    document.getElementById("segundo").textContent = "el segundo número es: "+ num1;
  }
}