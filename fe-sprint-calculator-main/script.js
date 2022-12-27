const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.


function calculate(n1, operator, n2) {
  let result = 0;
  if(operator === '+'){
    result = Number(n1) + Number(n2);
    // n1 n2 에 넣을 값이 String으로 데려오기 때문에 Number로 바꾸어야한다.
  }
  else if(operator === '-'){
    result = Number(n1) - Number(n2);
  }
  else if(operator === '*'){
    result = Number(n1) * Number(n2);
  }
  else if(operator === '/'){
    result = Number(n1) / Number(n2);
  }
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  // operator === '' 작은따음표 왜 붙여야하는지????????????
  // Number 를 왜 붙이는지????????????????
  return String(result);
}




buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다. function 부분이 작동함

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {


      if(firstOperend.textContent === '0'){
        firstOperend.textContent = buttonContent;
      }else{
        secondOperend.textContent = buttonContent;
      }

      // // firstOperend.textContent = buttonContent;
      
      // if(firstOperend.textcontent === '0'){
      // firstOperend.textContent = buttonContent;
      // }else{
      // secondOperend.textContent = buttonContent;
      // }

    }
  }

    // 첫번째 숫자가 0이 아니라면 다음 숫자가 입력되게해야한다.

    if (action === 'operator') {
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      
    }

    if (action === 'clear') {
      firstOperend.textContent = '0';
      operator.textContent = '+';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
    }

    if (action === 'calculate') {
    // 첫 번째 숫자, 연산자, 두 번째 숫자를 확정해야 합니다.
    // 위 세 가지를 함수 calculate에 전달하고, 돌려받은 결괏값이 마지막 칸에 입력되어야 합니다.
    // String 빼도 되는건가??
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
    }
  }
);


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event){
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {

      // display.textContent = buttoncontent; 


      // 처음 숫자가 '0'이면 버튼 누르면 숫자가 '0' 대신 들어가고
      // 처음 숫자가 '0'이 아니라면 버튼 누르면 숫자가 뒤에 더해진다.
      // if(display.textContent === '0'){
      //   display.textContent = buttonContent;
      // }else{
      //   display.textContent += buttonContent; // += 뿌듯
      // }

      if(operatorForAdvanced === display.textContent){ 
        //operator.text.content ===  '+', '-', '*', '/'
        //조건문의 순서
        //previousKey === '+', '-', '*', '/'
        // console.log를 적극 사용하기 시작
        // operator 엘리먼트와 자식들 불러내고
        // operator.textcontent 초기값 + 이래서 안 돌아가는구나 

        display.textContent = buttonContent;
      }
      else if(display.textContent === '0'){

        display.textContent = buttonContent;
      }
      else if(display.textContent !== '0'){
        display.textContent += buttonContent;
      }
      // 숫자 다음 사칙연산 다음 숫자를 입력했을 때 기존의 숫자가 없어지고 첫번째누른 숫자만 떠야한다.
    }


    if (action === 'operator') {

      // 클릭한 버튼이 operator라면 화면출력값(이전숫자)과 operator를 저장한다.
      // 다시 Number를 눌렀을 때 새롭게 숫자가 시작되어야한다.
      // 이전숫자와 이후숫자가 계산되어야한다.


      operatorForAdvanced = display.textContent; // 변수 할당 // 변수명 좀 봐라!!!!
      previousKey = operator.textContent;
      
      // 내가 연산자도 눌렀다는 것도 기억해야한다.
      // operatorForAdvanced = buttonContent; 
      // firstNum = display.textContent; 
      // previousKey = 'operator';
    }

    if (action === 'decimal') {}
    if (action === 'clear') {
      display.textContent = '0';
      operatorForAdvanced = '0'
      // 변수 undefined;
      // previousKey = clear 왜일까?
    }
    if (action === 'calculate') {
      // calculate(operatorForAdvanced.textContent, operator.textContent, display.textContent)

      if(previousKey === '+'){
        display.textContent = Number(operatorForAdvanced) + Number(display.textContent)
      }
      if(previousKey === '-'){
        display.textContent = Number(operatorForAdvanced) - Number(display.textContent)
      }
      if(previousKey === '*'){
        display.textContent = Number(operatorForAdvanced) * Number(display.textContent)
      }
      if(previousKey === '/'){
        display.textContent = Number(operatorForAdvanced) / Number(display.textContent)
      }

      // previousNum = display.textContent
      // display.textContent = calculate(firstNum, operatorForAdvanced, previousNum)
      // previousKey = calculate;
    }

  }
});
