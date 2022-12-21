function makeDigits(num) {
  // num 을 입력 받아서 문자열을 리턴해야한다
  // ``을 사용해야한다.
  let answer = '' // answer 초기값을 빈 string값으로 설정해야한다.
  for(let i = 1; i <= num; i++){
    answer = answer+`${i}`;
  }
  return answer;
}
