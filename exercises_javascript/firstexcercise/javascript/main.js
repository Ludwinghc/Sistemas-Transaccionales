function descuent(){
  var valor = document.descuento.compra.value;
  if (valor > 70000) {
    var desc = eval(valor * 0.2)
    var total = eval(valor - desc)
    alert("su descuento es de: " + desc)
    document.descuento.resultado.value = total
  } else {
    alert("Su compra no tiene el descuento")
    document.descuento.resultado.value = valor
  }
}