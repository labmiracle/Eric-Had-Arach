function add(...args) {
  
  if (args.length === 0) {
    return 'No values were entered';
  }

  let result = 0;
  
  for (let number of args) {
    result += number;
  }
  
  return result;
}