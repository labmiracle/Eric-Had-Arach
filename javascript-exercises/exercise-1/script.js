const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  
  if (strokes < 1 || par < 1) {
    return 'The information entered is incorrect';
  }

  return (strokes == 1) ? names[0] :
    (strokes <= par - 2) ? names[1] :
    (strokes == par - 1) ? names[2] :
    (strokes == par) ? names[3] :
    (strokes == par + 1) ? names[4] :
    (strokes == par + 2) ? names[5] :
    names[6];
}

golfScore(5, 4);