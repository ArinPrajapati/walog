// const partition = (arr) => {
//   let i = -1;
//   let n = 0;
//   let pivot = arr.length - 1;

//   // set the pivot currectly
//   while (n < pivot) {
//     if (arr[n] > arr[pivot]) {
//       n++;
//     } else {
//       i++;
//       let temp = arr[i];
//       arr[i] = arr[n];
//       arr[n] = temp;
//       n++;
//     }
//   }
//   i++;
//   let temp = arr[i];
//   arr[i] = arr[pivot];
//   arr[pivot] = temp;

//   return arr;
// };

const quickSort = (array) => {
  const sorter = (arr, start, end) => {
    if (end <= start) return;

    let pivot = partition(arr, start, end);
    sorter(arr, start, pivot - 1);
    sorter(arr, pivot + 1, end);
  };

  const partition = (arr, start, end) => {
    let pivot = arr[end];
    let i = start - 1;
    for (let j = start; j <= end - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    i++;
    let temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    return i;
  };

  sorter(array, 0, array.length - 1);
};

let i = [2, 4, 8, 6, 7, 3, 1, 9, 5];
quickSort(i);
console.log(i);
