async function getNewsAndWeatherAsync () {
  let result = {}
  
  //fetch(newsURL)의 promiseResult값에 json()함수적용하고 나온 promiseResult값 객체
  let json1 = await fetch(newsURL).then(resp => resp.json());
  // fetch(weatherURL)의 promiseResult값에 json()함수적용하고 나온 promiseResult값 객체
  let json2 = await fetch(weatherURL).then(resp => resp.json());

  return {
    // json1 객체안 data키안에 원하는 값이 있으므로 json1.data해주고 객첼로 리턴 
    news: json1.data,
    // json2 객체를 값으로 weather를 키로하는 객체를 리턴
    weather: json2
  }
}




if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}
