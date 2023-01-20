const { response } = require("express");


// function getNewsAndWeatherAll() {
//   // TODO: Promise.all을 이용해 작성합니다
//   result = {};
//   return Promise.all([
//     fetch(newsURL),
//     fetch(weatherURL)
//     ])
//   .then(([newsValue, weatherValue]) =>{
//     console.log(newsValue.json())
//     result['news'] = newsValue.json()['data']
//     result['weather'] = weatherValue.json()['data']
//     return result;
//   })

// }


function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  // promise.all을 이용해서 fetch(newsURL), fetch(weatherURL)의 promiseResult를 뽑아낸다.
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
  // 각 promiseResult 값에 map 메소드를 이용해서 json()함수를 적용시켜준다.
    .then((response) => {
      response = response.map((el) => el.json());
      return response;
    })
    // 적용된 값은 프로미스이고 promiseResult 값을 다시뽑아낸다.
    .then((response) => {
      return Promise.all(response);
    })
    // 그 값들이 배열에 담겨져 나온다.
    // 첫번째로 나온값은 news에 넣어주고
    // 두번재로 나온값을 weatherd에 넣어주고 객체로 리턴한다.
    .then((response) => {
      return { news: response[0]["data"], weather: response[1] };
    });
}





if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
