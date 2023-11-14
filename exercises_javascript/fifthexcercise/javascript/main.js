function Buscar(){
  var key = document.detalle.clave.value;
  switch (key) {
    case key='01':
      document.getElementById('Nombre').textContent = 
      "Xbox serie X";
      document.getElementById('clave').textContent =
      "01";
      document.getElementById('precioO').textContent =
      "1.300.000";
      document.getElementById('precioD').textContent =
      "1.170.000";
      break;

    case key='02':
      document.getElementById('Nombre').textContent = 
      "Playstation 5";
      document.getElementById('clave').textContent =
      "02";
      document.getElementById('precioO').textContent =
      "3.300.000";
      document.getElementById('precioD').textContent =
      "3.170.000";
      break;

    default:
      document.getElementById('Nombre').textContent = 
      "clave no valida";
      document.getElementById('clave').textContent =
      "clave no valida";
      document.getElementById('precioO').textContent =
      "clave no valida";
      document.getElementById('precioD').textContent =
      "clave no valida";
      break;
  }
}