
var reverseBits = function(n) {
    let binary = ""
    let output = 0
    
    for(let i = 0; i < 32; i++){
      let divided = n / 2** i
      binary += Math.floor(divided % 2)
      
    }
    for( j = 0 ; j < 32; j++){
      let multiplied = parseInt(binary[j]) * 2 ** (31 - j);
      output += multiplied
    }
  return output
   
};