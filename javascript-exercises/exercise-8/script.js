function add(...args) {
  
  // Validations
  if (args.length === 0) {
    return 'No values were entered';
  }
  if (args.some(elem => typeof elem !== 'number')) {
    return 'All values must be numbers';
  }

  let result = 0;
  
  for (let number of args) {
    result += number;
  }
  
  return result;
}

