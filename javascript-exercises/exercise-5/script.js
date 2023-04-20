function camelize(str) {
  
  // Validation
  if (typeof str !== 'string') {
    return 'You must enter a text string';
  }

  let phrase = str.split('');
  let newPhrase = [];

  for (let i = 0; i < phrase.length; i++) {
    if (i === 0) {
      newPhrase.push(phrase[0].toLowerCase());
      continue;
    }
    if (phrase[i] === ' ') {
      newPhrase.push(phrase[i+1].toUpperCase());
      i++;
      continue;
    }
    newPhrase.push(phrase[i]);
  }

  return newPhrase.join('');
}

console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');