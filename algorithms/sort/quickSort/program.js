/**
 * Quick Sort
 * @param {Number[]} arr this is the array that we want to sort
 * @returns {Number[]} this is the sorted array
 * @description this function will sort the array using quick sort algorithm
 * @author Arin
 */
const quickSort = (arr) => {
  function sorter(array, low, high) {
    if (low < high) {
      let pivotIndex = Partition(array, low, high);
      sorter(array, low, pivotIndex - 1);
      sorter(array, pivotIndex + 1, high);
    }
  }

  function Partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i = i + 1;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  }
  sorter(arr, 0, arr.length - 1); // Start sorting the entire array
  return arr;
};

exports.module = quickSort;
