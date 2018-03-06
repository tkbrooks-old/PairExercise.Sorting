function split(arr) {
  const midPoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const newArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  return (!arr1.length) ? [...newArr, ...arr2] : [...newArr, ...arr1];
}

function mergeSort(array) {
  if (array.length === 1) return array;
  const splitArr = split(array);
  return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
}

const arr1 = [4,7,434,23,2,46,3,8,9,67,31,24,76];
const arr2 = [4,7,434,2,2,6,87,45,23,83,953,2,46,3,8,9,67,31,24,76];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
