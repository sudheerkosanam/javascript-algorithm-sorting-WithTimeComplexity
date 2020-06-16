function quickSort(arr) {
    const copiedArray = [...arr];

    if(copiedArray.length <= 1){
        return copiedArray;
    }

    const smallerElementsArray = [];
    const largerElementArray = [];
    const pivotElement = copiedArray.shift();
    const centerElementArray = [pivotElement];

    while(copiedArray.length){
        const currentElement = copiedArray.shift();
        if (currentElement === pivotElement){
            centerElementArray.push(currentElement);
        } else if (currentElement < pivotElement){
            smallerElementsArray.push(currentElement);
        } else {
            largerElementArray.push(currentElement);
        }
    }

    const smallerElementSortedArray = quickSort(smallerElementsArray);
    const largerElementSortedArray = quickSort(largerElementArray);

    return smallerElementSortedArray.concat(centerElementArray, largerElementSortedArray);
    
}

// Time Complexity 
//Runtime of recursion : O(n ^ logb a)
// Algorithm runtime : O(n^logb(a) * log n)
// recursive Step Runtime: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Runtime outside of the recursion : O(n)
// Best Case    => items are sorted randomly =>O(n * log n)
// Average Case => items are sorted randomly =>O(n * log n)
// Worst Case   => items are already sorted  =>O(n^2)

const sortedArray = quickSort([-3, 10, 1, 100, -10, 22, 15]);
console.log(sortedArray);
