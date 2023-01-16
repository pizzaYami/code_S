const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  constructor(age,job,color,food,eat,honeyPot,makeHoney,giveHoney){
  super(color, food, eat)
  this.age = 10;
  this.job = `make honey`;
  this.honeyPot = 0;
  this.makeHoney = function(){
    this.honeyPot += 1;
  }
  this.giveHoney = function(){
    this.honeyPot -= 1;
  }
  }
}

module.exports = HoneyMakerBee;
