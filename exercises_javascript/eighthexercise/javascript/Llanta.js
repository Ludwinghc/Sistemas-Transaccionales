export default class Llanta{
  constructor(numLlantas){
    this.numLlantas = numLlantas;
    this.total;
  }
  cotizacion() {
    if (parseInt(this.numLlantas)>= 5) {
      this.total = parseInt(this.numLlantas) * 138000;
    } else {
      this.total = parseInt(this.numLlantas) * 150000;
    }
  }
  getCotizacion() {
    return this.total;
  }
}