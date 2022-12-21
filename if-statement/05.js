function checkAge(name, age) {
  //21살이상이면 Welcome, name! 
  //21살미만이면 Go home, name! 리턴
  //if문을 사용해서 나이범위를 정하자
  let answer;
  if (age >= 21 ){
    answer = `Welcome, ${name}!`;
  }
  else if(age < 21){
    answer = `Go home, ${name}!`;
  }
  return answer;
}
