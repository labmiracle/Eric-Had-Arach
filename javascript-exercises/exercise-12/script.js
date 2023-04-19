function jugar() {
  
  let numeroAleatorio = 1 + Math.floor((Math.random()*10));
  let numeroJugador;

  do {
    numeroJugador = parseInt(prompt('Ingrese número'));
    if (numeroJugador === 'NaN') {
      alert('Debes introducir un número válido');
    }
    if (numeroJugador < numeroAleatorio) {
      alert('El número es mayor');
    }
    else if (numeroJugador > numeroAleatorio) {
      alert('El número es menor');
    }
  }while(numeroAleatorio !== numeroJugador);

  alert(`Haz acertado, el valor es ${numeroAleatorio}`);
}


