// ES5
function Car(brand, name, color){
  this.brand = brand;
  this.name = name;
  this.color = color;
}
// ES6
class Car{
  constructor(brand, name, color){
  this.brand = brand;
  this.name = name;
  this.color = color;
  }
}

// ES5 함수로 정의
function Car(brand, name, color){
  // 인스턴스가 만들어질 때 실행되는 코드
}
// ES6 class키워드 사용
class Car{
  constructor(brand, name, color){
  // 인스턴스가 만들어질 때 실행되는 코드
  }
}

function UserInfo(name, age, address) {
  this.name = name;
  this.age = age;
  this.addresss = address;
}


let userInfo = new UserInfo();
console.log(userInfo);

userInfo = new UserInfo('홍길동', 20, '서울');
console.log(userInfo); //{name: '홍길동', age: 20, addresss: '서울'}


function UserInfo(name, age, address) {
  this.name = name;
  this.age = age;
  this.addresss = address;
}

UserInfo.prototype.koreaAge = functino(){
  // 한국식나이 구하는 코드 
}

console.log(UserInfo())