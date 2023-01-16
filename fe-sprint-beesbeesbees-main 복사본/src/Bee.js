const Grub = require('./Grub');

class Bee extends Grub {
  constructor(age, color, food, eat, job){
    super(food, eat)
  
    this.age = 5;
    this.color = 'yellow';
    this.job = `Keep on growing`;
    }
}



module.exports = Bee;
