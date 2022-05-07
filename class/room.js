const { Item } = require("./item");

class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
  }

  printRoom() {
    console.clear();
    console.log("");
    console.log(this.name);
    console.log("");
    console.log(this.description);
    console.log("");
    if (this.items.length > 0) {
      console.log(`Items: ${this.items.map((item) => item.name).join(", ")}`);
    }
    console.log(this.getExitsString());
    console.log("");
  }

  getExits() {
    return Object.keys(this.exits);
  }

  getExitsString() {
    return `Exits: ${this.getExits().join(", ")}`;
  }

  connectRooms(direction, connectingRoom) {
    // Check if the direction and connecting room are valid
    if (["n", "s", "e", "w"].indexOf(direction) < 0 || !connectingRoom) {
      throw new Error("Error: Invalid room connection");
    }

    this.exits[direction] = connectingRoom;
  }

  getRoomInDirection(direction) {
    return this.exits[direction];
  }

  getItemByName(name) {
    for (let i = 0; i < this.items.length; i++) {
      let roomItem = this.items[i];
      //console.log(roomItem);

      if (roomItem.name === name) {
        this.items.splice(i, 1);
        return roomItem;
      }
    }
  }
}
// let room = new Room("Test Room", "A test room");
// let item = new Item('rock', 'this is a rock')

// console.log(room.getItemByName())

module.exports = {
  Room,
};
