var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    let comparison = 0
    let output = ""
    
    for(let i = 0; i < strs[0].length; i++){
      let char = strs[0][i]
      for(let j = 1; j < strs.length; j++){
        
        if( char !== strs[j][i]){
          return output
        }
      }
      output += char
    }
  return output

};