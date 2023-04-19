function onlyUniques(...args) {
  
  let newArray = [];
  
  for (let i = 0; i < args.length; i++) {
    let quantity = 0;
    for (let j =0; j < args.length; j++) {
      if (args[i] === args[j]) {
        quantity++;
      }
      if (quantity > 1) {
        quantity = 0;
        break;
      }
    }
    if (quantity === 1) {
      newArray.push(args[i]);
    }
  }

  return newArray;
}