async function getNewsAndWeatherAsync () {
  let result = {}
  
  console.log(fetch(newsURL)) // 프로미스 출력
  // console.log(await fetch(newsURL)) // 프로미스의 Result인 Response 출력
  let newsValue = await fetch(newsURL);
  // console.log(newsValue)
  newsValue = await newsValue.json();
  // console.log(newsValue)
  result["news"] = newsValue["data"];

  
  let weatherValue = await fetch(weatherURL);
  weatherValue = await weatherValue.json();
  result["weather"] =  weatherValue;

  return result
}




if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}
