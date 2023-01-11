let user = {
  name: "John",
  age: 30,

  sayHi() {
    // this는 현재 객체를 나타냅니다.
    alert(this.name);}
};

user.sayHi(); // John