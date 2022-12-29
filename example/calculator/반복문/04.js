function makeMultiplesOfDigit(num) {
  // parseInt(num / 3)을 사용해서 몫을 구해서 몫만큼 3의 배수값이 나오도록 하자 
  // 문자열로 리턴 ``사용 
  // for문 사용
    let answer = '';
    for(let i = 1; i <= parseInt(num / 3); i++){
      answer = answer + `${i*3}`
      }
      return answer
}

