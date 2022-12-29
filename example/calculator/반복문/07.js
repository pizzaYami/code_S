function addOneSecond(hour, minute, second) {
  //`${}` 사용하면 되고
  // 60초되면 0초 +1분
  // 60분되면 0분 +1시간 
  // 24시간되면 0시 되도록
  let second1 = second + 1

  if(second1 === 60){
    minute = minute + 1
    second1 = 0
  }
  if(minute === 60){
    hour = hour + 1
    minute = 0
  }  
  if(hour === 24){
    hour = 0
  } 
    
  return `1초 뒤에 ${hour}시 ${minute}분 ${second1}초 입니다`

}
