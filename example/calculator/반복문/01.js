function sumTo(num) {
  // 수를 받아서 0부터 하나씩 합
  // for 문을 사용하자
  let answer = 0
  for(let i = 0; i <= num; i++){
    answer = answer + i;
  }
  return answer;
}