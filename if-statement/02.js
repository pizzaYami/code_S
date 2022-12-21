function fizzBuzz(num) {
  // 3과 5로 나눈 나머지값 나오게 한다. % 사용
  // string으로 리턴되게
  // else if를 사용
  let answer
  if (num % 15 === 0 ){  // 15를 먼저 넣어야 된다. if문 사용할 때에도 순서를 생각하고 코딩하자
    answer = 'FizzBuzz';
  }
  else if(num % 3 === 0 ){
    answer = 'Fizz';
  }
  else if(num % 5 === 0 ){
    answer = 'Buzz';
  }
  else{
    answer = 'No FizzBuzz';
  }
  return answer
}
