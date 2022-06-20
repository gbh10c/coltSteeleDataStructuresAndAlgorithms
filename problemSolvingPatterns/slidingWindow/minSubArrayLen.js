// Write a function which accepts an array of positive integers and a positive integer.Infinity

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. Return 0 if there is no array.

function minSubArrayLen(arr, int) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    if (total < int && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= int) {
      minLength = Math.min(minLength, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

// minSubArrayLen([2,3,1,2,4,3], 7)
// minSubArrayLen([2,1,6,5,4], 9)
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)
// minSubArrayLen([4,3,3,8,1,2,3], 11)
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)
