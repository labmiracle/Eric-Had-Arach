function palabraMasLarga(str) {
  
  let palabraMasLarga = '';
  const palabras = str.split(' ');

  for (let palabra of palabras) {
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }

  return palabraMasLarga;
}

console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');


function primeraMayuscula(str) {
  
  let letras = str.split('');
  
  for (let i = 0; i < letras.length; i++) {
    if (i === 0) {
      letras[i] = letras[i].toUpperCase();
    }
    if (letras[i] === ' ') {
      letras[i+1] = letras[i+1].toUpperCase();
    }
  }

  return letras.join('');
}

console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');