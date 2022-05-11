function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[i - 1]) {
        [arr[j], arr[i - 1]] = [arr[i - 1], arr[j]];
      }
    }
  }
  return arr;
}

bubbleSort([3, 5, 2, 4, 1]); // [1, 2, 3, 4, 5]

// OLDER
// function swapOld(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// // NEWER
// const swapNew = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

// WITH FUNCTION
// const swapNew = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[i - 1]) {
//         swapNew(arr, j, i - 1);
//       }
//     }
//   }
//   return arr;
// }
