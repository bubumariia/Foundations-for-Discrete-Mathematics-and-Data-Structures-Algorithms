var pivotArray = function(nums, pivot) {
    let output = []
    let insertPosition = 0
    let pivotFreq = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < pivot){
            output[insertPosition] = nums[i]
            insertPosition++
        }else if(nums[i] == pivot){
            pivotFreq++
        }
    }
    
    while(pivotFreq > 0){
        output[insertPosition] = pivot
        insertPosition++
        pivotFreq --
    }

    for(let j = 0; j < nums.length; j++){
        if(nums[j] > pivot){
            output[insertPosition] = nums[j]
            insertPosition++
        }
    }
    return output
};

console.log(pivotArray([9,12,5,10,14,3,10], 10))