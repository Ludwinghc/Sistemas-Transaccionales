export default class Compra {
  constructor(num,valor) {
    this.num = num;
    this.valor = valor;
    this.descuento;
  }
  promo(){
    if (parseInt(this.num)<74) {
      this.descuento = parseInt(this.valor) * 0.15;
    } else {
      this.descuento = parseInt(this.valor) * 0.2;
    }
  }
  getPromo(){
    return this.descuento;
  }
}