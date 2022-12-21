function makeDigits2(num) {
  let answer = '';
  let i = 1;
  while(i <= num){
    if(i>=2){
      answer = answer + '-'
    }
    answer = answer+`${i}`
    i++
  }
  return answer;
}
