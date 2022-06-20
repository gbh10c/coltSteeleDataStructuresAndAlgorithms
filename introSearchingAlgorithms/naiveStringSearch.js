function naiveSearch(long, short) {
  let total = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) total++;
    }
  }
  return total;
}

// naiveSearch('wowomgwow', 'wow'); //2
// naiveSearch('lorie loled', 'lol'); //1
