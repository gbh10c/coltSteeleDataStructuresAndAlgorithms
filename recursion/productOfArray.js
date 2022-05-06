function productOfArray(array) {
  let result = array[0];

  function helper(helperInput) {
    if (helperInput.length === 1) {
      return;
    }

    result *= helperInput[1];

    helper(helperInput.slice(1));
  }

  helper(array);

  return result;
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
