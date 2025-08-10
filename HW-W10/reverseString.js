var reverseString = function(s) {
  let current = ""
    for(let i = 0; i < Math.floor(s.length / 2); i++){
      current = s[i]  
      s[i] = s[s.length-1-i] // 
      s[s.length-1-i] = current
      
    }
  return s
};