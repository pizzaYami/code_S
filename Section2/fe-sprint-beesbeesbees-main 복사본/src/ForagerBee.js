const Bee = require('./Bee');

class ForagerBee extends Bee {
  constructor(age, job, color, food, eat, canFly, treasureChest,forage){
  super(color, food, eat)
  
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true
  this.treasureChest = [];
  
  this.forage = function(treasure){
    this.treasureChest.push(treasure);
  }
  }
}
module.exports = ForagerBee;
