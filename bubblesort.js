function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j);
      }
    }
  }
  return array;
}

function swap(array, j) {
  const largerVal = array[j - 1];
  array[j - 1] = array[j];
  array[j] = largerVal;
}

const array2 = [12, 67, 43, 89, 56, 34, 82, 94, 25];
console.log(bubbleSort(array2));
