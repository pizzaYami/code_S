const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {

  let result = new Array;

  let user1PathValue = await getDataFromFilePromise(user1Path)
  result.push(JSON.parse(user1PathValue))

  let user2PathValue = await getDataFromFilePromise(user2Path)
  result.push(JSON.parse(user2PathValue))

  return result
  // TODO: async/await 키워드를 이용해 작성합니다
}

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}