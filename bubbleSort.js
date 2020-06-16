function bubbleSort(arr) {
    let resultArr = [...arr]

    for (let outer = 0; outer < resultArr.length; outer++) {
        let outerEle = resultArr[outer];
        
        for (let inner = 0; inner < resultArr.length; inner++) {
             let innerEle = resultArr[inner];

             if (outerEle < innerEle) {
                 resultArr[outer] = innerEle;
                 resultArr[inner] = outerEle;

                 outerEle = resultArr[outer];
                 innerEle = resultArr[inner];
             }
        }
    }
    return resultArr;
}

// Time Complexity 
//Best Case   =>items already sorted   => O(n)
//Average case=>dnt knw where items are=> O(n^2)
//Worst case  =>items are wrong ordered=> O(n^2)

const sortedArray = bubbleSort([5, 10, -3, -10, 1, 100, 99]);
console.log(sortedArray);
