var majorityElement = function (nums) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++){
    
    if(!map.has(nums[i])){
      map.set(nums[i], 1)
    }else{
      map.set(nums[i], map.get(nums[i])+1)
    }
  }
  for(let j = 0; j < nums.length; j++){
    if( map.get(nums[j]) > Math.floor(nums.length / 2)){
      return nums[j]
    }
  }
  
};