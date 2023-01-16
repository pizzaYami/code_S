class Grub {
  constructor(age, color, food, eat){
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
    this.eat = eat;

    this.eat = function(){
      return 'Mmmmmmmmm jelly'
    }
  }
}

module.exports = Grub;
