// function hasRepeatedCharacter(str) {
//   if(str === '' ){
//     return false
//   }

  let answer
  for(let i = 0; i <= str.length-1; i++){
    for(let j = 0; j <= str.length-1; j++){
      if(i !== j){
        if(str[i] === str[j]){
          return true
        }
        // else{ 
        //   answer = false
        // }
      }
    }
  }
  return false


// i=0, j=1

// 오답

function hasRepeatedCharacter(str) {

  for(let i = 0; i <= str.length-1; i++){
    for(let j = 0; j <= str.length-1; j++){
      if(i !== j){
        if(str[i] === str[j]){
          return true
        }
      }
    }
  }
  
  return false
}
