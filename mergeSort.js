function mergeSort(arr) {
    if (arr.length < 2){
        return arr;
    }
    if (arr.length === 2){
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0,middle);
    const rightArray = arr.slice(middle);

    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);
    
    const mergedArr = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0;
    while ( leftArrIndex < leftSortedArray.length || rightArrIndex < rightSortedArray.length){
      if (leftArrIndex >= leftSortedArray.length || leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]){
          mergedArr.push(rightSortedArray[rightArrIndex]);
          rightArrIndex++;
      } else {
        mergedArr.push(leftSortedArray[leftArrIndex]);
        leftArrIndex++;
      }
    }
    return mergedArr;
}

// Time Complexity 
// O(n * log n)

const sortedArray = mergeSort([-10, 33, 5, 10, 3, -19, -99, 100]);
console.log(sortedArray);
