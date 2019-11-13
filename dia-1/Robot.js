"use strict";

//const mySpace = [[1,9,5],[8,7,6],[6,0,2]]

class Robot {
  constructor(space) {
    this.space = space;
    this.column = 0;
    this.row = 0;
  }

  moveRight() {
    if (this.column === this.space.length - 1) {
      return false;
    }
    this.column++;
    return true;
  }

  moveLeft() {
    if (this.column === 0) {
      return false;
    }
    this.column--;
    return true;
  }

  moveUp() {
    if (this.row === 0) {
      return false;
    }
    this.row--;
    return true;
  }

  moveDown() {
    if (this.row === this.space.length - 1) {
      return false;
    }
    this.row++;
    return true;
  }

  getPosition() {
    return this.space[this.row][this.column];
  }
}

const myRobot = new Robot([[1, 9, 5], [8, 7, 6], [6, 0, 2]]);

console.log(myRobot.getPosition());

myRobot.moveRight();

console.log(myRobot.getPosition());

myRobot.moveLeft();

console.log(myRobot.getPosition());

myRobot.moveUp();

console.log(myRobot.getPosition());

myRobot.moveDown();
myRobot.moveDown();
myRobot.moveRight();
myRobot.moveRight();

console.log(myRobot.getPosition());
