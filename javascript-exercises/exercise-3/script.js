function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  
  if (!(Number.isInteger(velocidadCrecimiento) && Number.isInteger(velocidadDecrecimiento), Number.isInteger(alturaDeseada))) {
    return 'Todos los datos ingresados deben ser números enteros';
  }
  if (velocidadCrecimiento < 1 || velocidadDecrecimiento < 1 || alturaDeseada < 1) {
    return 'Todos los datos ingresados deben ser números enteros positivos';
  }
  if (velocidadCrecimiento <= velocidadDecrecimiento) {
    return 'La velocidad de crecimiento no puede ser igual o menor a la velocidad de decrecimiento';
  }

  let alturaActual = 0;
  let cantDias = 0;

  while (alturaDeseada > alturaActual) {
    cantDias++;
    alturaActual += velocidadCrecimiento - velocidadDecrecimiento;
  }

  return cantDias;
}

