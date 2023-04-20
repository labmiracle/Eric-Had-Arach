function addOnlyNums(...args) {
  
  // Validations
  let onlyNumbersOrString = args.every(elem => (typeof elem === 'number' || typeof elem === 'string'));
  if (onlyNumbersOrString === false) {
    return 'One of the values is not a number or a string';
  }
  let thereIsANumber = args.some(elem => typeof elem === 'number');
  if (thereIsANumber === false) {
    return 'None of the arguments is a number';
  }

  let result = 0;
  for (let value of args) {
    if (typeof value === 'string') {
      continue;
    }
    result += value;
  }
  return result;
}

