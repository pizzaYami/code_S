let elInputUsername = document.querySelector('#username');

elInputUsername.value = '김코딩';

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');


elInputUsername.onkeyup = function(){
  console.log(elInputUsername.value)

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

function isMoreThan4Length(value){
  return value.length >= 4;
}
