function convertScoreToGrade(score) {
  // 점수를 입력받아 점수에 해당하는 등급 리턴
  // if문을 사용해서 점수의 범위를 정하자
  let answer
  if(score >= 90 && score <= 100){
    answer = 'A';
  }
   else if(score >= 80 && score <= 89){
     answer = 'B';
  }
   else if(score >= 70 && score <= 79){
    answer = 'C';
  }
   else if(score >= 60 && score <= 69){
    answer = 'D';
  }
   else if(score >= 0 && score <= 59){
    answer = 'F';
  }
    else {
      answer = "INVALID SCORE"
    }
  return answer;
}