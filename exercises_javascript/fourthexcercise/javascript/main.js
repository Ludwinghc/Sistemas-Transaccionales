function calculo(){
  var sleep = document.calorias.dormido.value;
  var sit = document.calorias.sentado.value;

  var calorie_sleep = eval(sleep*1.08);
  var calorie_sit = eval(sit*1.66);
  if (sleep<0) {
    document.getElementById("caloriasDormido").textContent ="Digite Numeros positivos";
  
  } else {
      document.getElementById("caloriasDormido").textContent =
      "Las calorias consumidas durmiendo en "+sleep+" minutos son: "+calorie_sleep;
  }

  if (sit<0) {
    document.getElementById("caloriasSentado").textContent ="Digite Numeros positivos";
  } else {    
    document.getElementById("caloriasSentado").textContent = 
    "Las calorias consumidas sentado en "+sit+" minutos son: "+calorie_sit;
  }
}