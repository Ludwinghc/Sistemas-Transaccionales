export default class Bosque{
  constructor(numPinos, numOyal, numCedro, area) {
    this.numPinos = numPinos;
    this.numOyal = numOyal;
    this.numCedro = numCedro;
    this.area = area;
    this.areaCuadrada;
    this.areaPinos
    
  }

  calculo(){
    this.areaCuadrada = parseInt(this.area)**2;
    if (this.areaCuadrada< 1000000) {
      
    } else {
      
    }
  }
}