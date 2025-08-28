var removeDuplicates = function(nums) {
    let hashMap = new Map();
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = hashMap.get(nums[i]) || 0;
        if (count < 2) {
            nums[j] = nums[i];
            j++;
        }
        hashMap.set(nums[i], count + 1);
    }

    return j;
};


console.log(removeDuplicates([1,1,1,2,2,3]))