const arr = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];
let count = 0;

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

const prime = () => {
  const numbers = [];
  count=0;

  for (let index = 0; index < 2000000; index++) {
    if(isPrime(index))
    count+=index;
    
  }
  
  

  return count;
}

function isPrime (n)
{
    if (n < 2) return false;

    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++)
    { 
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}
console.log(prime());
console.log(quickSort(arr));
console.log("count", count);


