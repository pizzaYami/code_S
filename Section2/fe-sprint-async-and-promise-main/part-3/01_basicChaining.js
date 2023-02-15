const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다

  // 빈객체를 만든다.
  let result = {}; 
  
  // fetch(newsURL)로 프로미스를 가져와서 json()으로 문자열로 만든다. 
  return fetch(newsURL)
    .then((response) => {
      return response.json();
    })
    // 나오는 값을 보면 key인 data안에 원하는 값이 있으므로 json['data']를 통해 빼낸다.
    // 그 값을 result 객체안에 넣어준다.
    // 그뒤에 다음 다음 프로미스를 실행되도록 연결시켜준다.
    .then((json) => {
      result["news"] = json["data"];
      return fetch(weatherURL);
    })
    // 이전 .then에서 fetch(weatherURL)를 리턴해서 그 Result값이 나온다.
    // 그리고 Result값을 json()으로 문자열로 만든다.
    .then((response) => {
      return response.json();
    })
    // result객체 weather키에 json을 값으로 넣어주고 result를 리턴한다.
    .then((json) => {
      result["weather"] = json;
      return result;
    });
}


if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}