// IF NEARLY SORTED, ADDING THE NO SWAPS VARIABLE OPTIMIZES THIS TO ALMOST LINEAR TIME

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[i - 1]) {
        [arr[j], arr[i - 1]] = [arr[i - 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
