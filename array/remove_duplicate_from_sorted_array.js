function nonDuplicateCount(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      count += 1;
    }
  }
  return count;
}

console.log(nonDuplicateCount([1, 2, 2, 3, 3]));
console.log(nonDuplicateCount([1, 2, 3, 4, 5, 5, 6]));
console.log(nonDuplicateCount([0, 0, 0, 1, 1, 2, 2, 3, 3, 4]));
