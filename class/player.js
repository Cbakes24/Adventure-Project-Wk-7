const { Room } = require("./room");

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // loop items.length
    let removed = this.currentRoom.getItemByName(itemName);
    if (removed) {
      this.items.push(removed);
    }
    // test by create player item
  }

  dropItem(itemName) {
    let removed = this.getItemByName(itemName);
    if (removed) {
      this.currentRoom.items.push(removed);
    }
  }

  eatItem(itemName) {
    let item = this.getItemByName(itemName);
    if (item.isFood) {
      console.log(`You ate ${itemName}`);
    } else {
      console.log(`You cannot eat ${itemName}`)
      this.items.push(item);
    }

  }

  getItemByName(name) {
    for (let i = 0; i < this.items.length; i++) {
      let playerItem = this.items[i];
      if (playerItem.name === name) {
        this.items.splice(i, 1);
        return playerItem;
      }
    }
  }
}
module.exports = {
  Player,
};
