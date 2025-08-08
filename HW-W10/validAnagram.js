var isAnagram = function(s, t) {
    const map = new Map()
    
    for(let i = 0; i < s.length; i++ ){
      if(map.has(s[i])){
        map.set(s[i], map.get(s[i]) + 1)
      }else{
        map.set(s[i], 1)
      }
      
    }
  for(let j=0; j < t.length; j++){
    if(map.has(t[j])){
      map.set(t[j], map.get(t[j]) - 1)
    }else{
      return false
    }
    
  }
  let counter = s.length
  for(let k = 0; k < s.length; k++){
    console.log(map.get(s[k]))
    if(map.get(s[k]) == 0){
      counter--
    }
  }
  return counter == 0 ? true:false
  
};