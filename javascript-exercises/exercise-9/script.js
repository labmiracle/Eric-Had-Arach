function addOnlyNums(...args) {
  
  let onlyNumbersOrString = args.every(function(elem) {
    return (typeof elem === 'number' || typeof elem === 'string');
  });
  if (onlyNumbersOrString === false) {
    return 'one of the values is not a number or a string';
  }

  let thereIsANumber = args.some(function(elem) {
    return typeof elem === 'number';
  });
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

