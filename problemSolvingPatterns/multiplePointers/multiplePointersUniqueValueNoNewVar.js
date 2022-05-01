function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  while (j <= arr.length) {
      if (arr[j] === arr[i]) {
          j++;
      } else if (arr[j] !== arr[i]) {
          i++;
          arr[i] = arr[j];
      }
  }
  return i;
}

// countUniqueValues([1,1,1,1,1,2]);
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
// countUniqueValues([]);
// countUniqueValues([-2,-1,-1,0,1]);