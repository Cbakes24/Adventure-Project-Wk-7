const { Room } = require("./room");

class Item {
  constructor(name, description) {
    this.name = name
    this.description = description
  }


  getItemByName(name){
    console.log(`The item is ${this.name}`)
  }


}


let item = new Item("rock", "just a simple rock");


// console.log(item.name)
// console.log(item.description)
// item.getItemByName()


module.exports = {
  Item,
};
