export default class Compra{
  constructor(totalCompra){
    this.totalCompra = totalCompra;
    this.inversionCompra;
    this.totalInversionCompra;
    this.prestamoBanco;
    this.totalPrestamoBanco;
    this.interesFabricante;
  }
  
  // METODO PARA DECIDIR EL CREDITO
  credito(){
    if (parseInt(this.totalCompra)> 500000) {
      this.inversionCompra = parseInt(this.totalCompra) * 0.55;
      this.totalInversionCompra = parseInt(this.totalCompra) -  this.inversionCompra;
      this.prestamoBanco = this.totalInversionCompra * 0.3;
      this.totalPrestamoBanco = this.totalInversionCompra - this.prestamoBanco;
      this.interesFabricante = this.totalPrestamoBanco * 0.2;
    } else {
      this.inversionCompra = parseInt(this.totalCompra) * 0.7;
      this.totalInversionCompra = parseInt(this.totalCompra) -  this.inversionCompra;
      this.interesFabricante = this.totalInversionCompra *0.2;
    }
  }
  getInversion(){
    return this.inversionCompra;
  }
  getTotalInversion(){
    return this.totalInversionCompra;
  }
  getPrestamo() {
    return this.prestamoBanco;
  }
  getTotalPrestamo() {
    return this.totalPrestamoBanco;
  }
  getInteresFabricante() {
    return this.interesFabricante;
  }
}