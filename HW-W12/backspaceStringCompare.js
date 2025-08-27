var backspaceCompare = function(s, t) {
    let newS = ""
    let newT = ""

    for(let i = 0; i < s.length; i++){
        
        if(s[i] == "#"){
            newS = newS.substring(0, newS.length - 1 )
        }else{
            newS+= s[i]
        }
        
    }
    for(let j = 0; j < t.length; j++){
        
        if(t[j] == "#"){
            newT = newT.substring(0, newT.length - 1 )
        }else{
            newT+= t[j]
        }
        
    }
    if(newS == newT){
        return true
    }
    return false
};

console.log(backspaceCompare("ab#c", "ad#c")) // true ac = ac
console.log(backspaceCompare("ab##", "c#d#")) 
console.log(backspaceCompare(s = "a#c", t = "b")) 