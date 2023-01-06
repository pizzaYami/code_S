let elInputUsername = document.querySelector('#username');

elInputUsername.value = '김코딩';

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

let elPassword = document.querySelector('#password');
let elPasswordCheck = document.querySelector('#password-retype');

let elPasswordFailureMessage = document.querySelector('.mismatch-message');
let elPasswordsuccessMessage = document.querySelector('.match-message');


elInputUsername.onkeyup = function(){
  console.log(elInputUsername.value)
}

elInputUsername.onkeyup = function(){
  console.log(elInputUsername.value)

function isMoreThan4Length(value){
  return value.length >= 4;
}

  if(isMoreThan4Length(elInputUsername.value)){
    //4글자보다 길때 성공메세지 보여야 함 
    elSuccessMessage.classList.remove('hide')
    //실패메시지가 가려져야함
    elFailureMessage.classList.add('hide')
  }
  else{
    //4글자보다 짧을 때 성공메세지 가려져야 함
    elSuccessMessage.classList.add('hide')
    //실패메시지가 보여야 함
    elFailureMessage.classList.remove('hide')
  }
}

elPassword.onkeyup = function(){

}

elPasswordCheck.onkeyup = function(){

  isMatch(elPassword.value, elPasswordCheck.value);
}


//비밀번호 두값이 일치하면 일치한다고 떠야함
function isMatch (password1, password2) {
  if(password1 === password2){
    // 일치하면 일치한다고 떠야함
    elPasswordsuccessMessage.classList.remove('hide');
    // 일치 안 한다고 숨기기
    elPasswordFailureMessage.classList.add('hide');
    return true
  }
  else{
    // 일치 안하면 일치안한다고 떠야함
    elPasswordFailureMessage.classList.remove('hide');
    // 일치한다고 숨기기
    elPasswordsuccessMessage.classList.add('hide');
    return false
  }
}

// 회원가입버튼 다 안적으면 활성화안됨