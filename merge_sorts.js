function mergingSort(array) {
  if (array.length < 2) return array; // base case
  const middle = Math.floor(array.length / 2); // we find the middle section/midian of the array
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);
  return merge(mergingSort(leftArray), mergingSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    // we check if array contains values
    if (leftArray[0] <= rightArray[0]) sortedArray.push(leftArray.shift());
    else sortedArray.push(rightArray.shift());
  }
  return [...sortedArray, ...leftArray, ...rightArray]; // we return a single array with the destructured values of the sorted array, left and right array
}

console.log(mergingSort([79, 100, 105, 110]));
