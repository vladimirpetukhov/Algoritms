const array = [
  1, 4, 5, 8, 9, 44, 56, 32, 11, 2, 3, 0, 88, 44, 33, 1, 6, 56, 13, 23, 55,
];
let count = 0;

const linearSearch = (array, item) => {
  for (var i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
};

console.log(linearSearch(array, 55));
console.log(count);

export default linearSearch;
