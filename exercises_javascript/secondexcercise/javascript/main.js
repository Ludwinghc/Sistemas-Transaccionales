function calcular_salario(){
  var horas = document.salario.horas.value;
  if (horas<=40) {
    var salary = eval(horas * 10000)
    document.getElementById("resultado").textContent = "Su Salario es: "+ salary.toLocaleString();
  } else {
    var horas_extras = eval(horas - 40)
    var precio_horas_normales = eval(40 * 10000)
    var precio_horas_extras = eval(horas_extras * 20000)
    var total_salary = eval(precio_horas_normales + precio_horas_extras)
    document.getElementById("resultado").textContent = "Su Salario es: "+ total_salary.toLocaleString();
  }
}