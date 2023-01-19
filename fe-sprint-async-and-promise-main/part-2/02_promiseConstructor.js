const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const getDataFromFilePromise = filePath => {
  return new Promise((resolve, reject) =>{
    fs.readFile(filePath, "utf8", (err,data) =>{
      if(err) reject(err); //err나오면 reject로 넘겨주고
      else resolve(data); // 아니면 resolve로 넘겨준다.
    })
  })

  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
};

getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise
};
