function presses(phrase) {
  // To do...
  let press = 0;

  let ones = phrase.match(/[adgjmptw]/gi);
  ones ? (press += ones.length) : (press += 0);

  let twos = phrase.match(/[behknqux]/gi);
  twos ? (press += twos.length * 2) : (press += 0);

  let threes = phrase.match(/[cfilorvy]/gi);
  threes ? (press += threes.length * 3) : (press += 0);

  let fours = phrase.match(/[sz]/gi);
  fours ? (press += fours.length * 4) : (press += 0);

  let spaces = phrase.match(/\s/g);
  spaces ? (press += spaces.length) : (press += 0);

  let mostNumbers = phrase.match(/[2-6]/);
  mostNumbers ? (press += mostNumbers.length * 4) : (press += 0);

  let eight = phrase.match(/[8]/);
  eight ? (press += eight.length * 4) : (press += 0);

  let sevenOrNine = phrase.match(/(7|9)/);
  sevenOrNine ? (press += sevenOrNine.length * 5) : (press += 0);

  let zeros = phrase.match(/[0]/);
  zeros ? (press += zeros.length * 2) : (press += 0);

  let digitOne = phrase.match(/[1]/);
  digitOne ? (press += digitOne.length) : (press += 0);
  return press;
}

presses("HOW R U");
presses("LOL");
