function isPrime(num) {
  let answer = true;

  for (let divider = 2; divider < Math.floor(Math.sqrt(num) + 1); divider++) {
    if (num % divider === 0) {
      answer = false;
      break;
    }
  }

  return num !== 1 ? answer : false;
}
// 소수구하는거 제곱근을 이용해서 품
// 11^2 이면 3~4사이임으로 2까지만 구하면 됨
///

function isPrime(num) {
     let answer = 0
    if(num === 1){
      return false
    }
    for(let i = 2; i <= num; i++){
      if(num % i === 0){
        if(num === i){
          return true
        }
        else{
          return false
        }
      }
    }
}
