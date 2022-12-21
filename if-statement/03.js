function miniCalculator(num1, num2, operator) {
  // if에 사칙연산 하나씩 넣자.
  let answer
  if (operator === '+'){
    answer = (num1 + num2);
  }
    else if (operator === '-'){
    answer = (num1 - num2);
  }
    else if (operator === '*'){
    answer = (num1 * num2);
  }
    else if (operator === '/'){
    answer = (num1 / num2);
  }
    return answer
}
