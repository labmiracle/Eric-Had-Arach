function jugar() {
  
  let limiteDeIntentos;
  do {
    limiteDeIntentos = parseInt(prompt('Ingrese la cantidad máxima de intentos que desea'));
  }while(isNaN(limiteDeIntentos));

  let numeroAleatorio = 1 + Math.floor((Math.random()*10));
  let numeroJugador;
  let intentos = 0;

  do {
    numeroJugador = parseInt(prompt('Ingrese número'));
    if (isNaN(numeroJugador)) {
      alert('Debes introducir un número válido');
    }
    else if (numeroJugador < numeroAleatorio) {
      alert('El número es mayor');
      intentos++;
    }
    else if (numeroJugador > numeroAleatorio) {
      alert('El número es menor');
      intentos++;
    }
  }while((numeroAleatorio !== numeroJugador) && (intentos < limiteDeIntentos));

  if (intentos === limiteDeIntentos) {
    alert('Perdiste, ya usaste todos los intentos permitidos');
  }
  else {
    alert(`Haz acertado, el valor es ${numeroAleatorio}`);
  }
}

jugar();



