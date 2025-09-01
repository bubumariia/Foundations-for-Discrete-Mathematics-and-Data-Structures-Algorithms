var longestPalindrome = function(s) {
    let hashMap = new Map()
    let counter  = 0

    for(let i = 0; i < s.length; i++){
        if(hashMap.has(s[i])){
            counter += 2
            hashMap.delete(s[i])
            
        }else{
            hashMap.set(s[i], 1)
            
        }
    }
    return s.length > counter ? counter+1: counter
};

console.log(longestPalindrome("abccccdd"))