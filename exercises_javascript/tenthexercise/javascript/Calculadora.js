export default class Calculadora {
  constructor(edad, genero){
    this.edad = edad;
    this.genero = genero;
    this.pulsaciones;
  }
  calculoPulsaciones(){
    if (this.genero === 'Hombre') {
      this.pulsaciones = (210 - parseInt(this.edad))/10
    }else if (this.genero === 'Mujer'){
      this.pulsaciones = (220 - parseInt(this.edad))/10
    }
  }
  getPulsaciones(){
    return this.pulsaciones;
  }
}