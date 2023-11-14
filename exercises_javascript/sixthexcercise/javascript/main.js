function calcular(){
  class Camisa{
    constructor(val_1){
      this.val_1 = val_1;
      this.total;
      this.descuento;
      this.totalPagar;
    }
    total(){
      if (parseInt(this.val_1)<3) {
        this.total = parseInt(this.val_1)* 50000;
        this.descuento = this.total *0.1;
        this.totalPagar = this.total - this.descuento;
        return String(this.totalPagar);
      } else {
        this.total = parseInt(this.val_1)* 50000;
        this.descuento = this.total *0.2;
        this.totalPagar = this.total - this.descuento;
        return String(this.totalPagar);
      }
    }
    getTotal(){
      return String(this.totalPagar);
    }
  }
  var numCamisa = document.compras.numcamisas.value;
  const camisaClass = new Camisa(numCamisa);
  var resultado = camisaClass.total();
  document.getElementById('total').textContent ="El total a pagar es: "+resultado;
}