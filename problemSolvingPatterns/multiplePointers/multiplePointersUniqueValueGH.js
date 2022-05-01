function countUniqueValues(arr) {
  let unique = 0;
  for (let i = 0; i < arr.length; i++) {
      let leader = arr[i+1];
      let follower = arr[i];
      if (leader !== follower) {
          unique++
      }
  }
  return unique;
}

// countUniqueValues([1,1,1,1,1,2]);
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
// countUniqueValues([]);
// countUniqueValues([-2,-1,-1,0,1]);