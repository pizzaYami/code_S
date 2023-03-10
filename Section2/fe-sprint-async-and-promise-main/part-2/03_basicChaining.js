const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');


// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  const result = []
  return getDataFromFilePromise(user1Path) // json 데이터가 뭔데
    .then(value =>{  // 
      value = JSON.parse(value)
      result.push(value)
      return getDataFromFilePromise(user2Path)
    })
    .then(value => {
      value = JSON.parse(value)
      result.push(value);
      return result;
    })
}

readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}