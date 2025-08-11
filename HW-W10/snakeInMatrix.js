var finalPositionOfSnake = function(n, commands) {
  let grid = 0
    for(let i = 0; i < commands.length; i++){
      if(commands[i] == "RIGHT"){
        grid+=1
      }if(commands[i] == "LEFT"){
        grid-=1
      }if(commands[i] == "DOWN"){
        grid+=n
      }if(commands[i] == "UP"){
        grid-=n
      }
    }
  return grid
};