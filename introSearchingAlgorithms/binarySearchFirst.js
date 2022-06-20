function binarySearch(sortArr, value) {
  let left = 0;
  let right = sortArr.length - 1;
  while (left < right) {
    let mid = Math.ceil((left + right) / 2);
    if (sortArr[mid] === value) return mid;
    sortArr[mid] < value ? (left = mid) : (right = mid);
  }
  return -1;
}

// binarySearch([1,2,3,4,5, 6], 2); // 1
// binarySearch([1,2,3,4,5], 3); // 2
// binarySearch([1,2,3,4,5], 5); // 4
// binarySearch([1,2,3,4,5], 6); // -1
