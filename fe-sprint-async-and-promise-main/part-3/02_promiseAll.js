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
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then((response) => {
      response = response.map((el) => el.json());
      return response;
    })
    .then((response) => {
      return Promise.all(response);
    })
    .then((response) => {
      return { news: response[0]["data"], weather: response[1] };
    });
}





if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
