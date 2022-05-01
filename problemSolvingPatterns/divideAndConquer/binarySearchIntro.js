function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < num) {
      min = middle + 1;
    } else if (currentElement > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// binarySearch([1,2,3,4,5,6], 4);
// binarySearch([1,2,3,4,5,6], 6);
// binarySearch([1,2,3,4,5,6], 11);
