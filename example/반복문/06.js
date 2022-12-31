function convertScoreToGrade(score) {
  if (score > 100 || score < 0) return "INVALID SCORE";
  if (score >= 90){
    if(score >= 98){
      return "A+"
    }
    if(score <= 93){
      return "A-"
    }
    return "A";
  } 
  if (score >= 80){
    if(score >= 88){
      return "B+"
    }
    if(score <= 83){
      return "B-"
    }
    return "B";
  } 
  if (score >= 70){
    if(score >= 78){
      return "C+"
    }
    if(score <= 73){
      return "C-"
    }
    return "C";
  } ;
  if (score >= 60){
    if(score >= 68){
      return "D+"
    }
    if(score <= 63){
      return "D-"
    }
    return "D";
    
  };
  return "F";
}