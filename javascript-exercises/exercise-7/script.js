
let count = 0;

function cc(card) {
  
  // Validation
  const cartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  if (cartas.includes(card) === false) {
    return 'The value entered is incorrect';
  }

  if (card >= 2 && card <= 6) {
    count++;
  }
  else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
    count--;
  }
  
  return (count > 0) ? `${count} Bet` : `${count} Hold`;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");