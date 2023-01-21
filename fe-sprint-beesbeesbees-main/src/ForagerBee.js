const Bee = require('./Bee');
// extends에 대해서 공부하자
class ForagerBee extends Bee {
  constructor(age, color, food, eat, job){
    super(age, color, food, eat, job)
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = 'true'
    this.treasureChest = []

    this.forage() = function(){}
  }
}

module.exports = ForagerBee;