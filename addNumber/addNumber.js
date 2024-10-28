function addNumber(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      return arr1[i] + arr2[j];
    }
  }
}

module.exports = addNumber;
