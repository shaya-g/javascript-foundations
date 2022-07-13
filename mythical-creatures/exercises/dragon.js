class Dragon {
  constructor(name, riderName) {
    this.name = name;
    this.rider = riderName;
    this.hungry = true;
    this.eaten = 0;
  }

  greet() {
     return `Hi, ${this.rider}!`;
  }

  eat() {
    this.eaten++;
    if (this.eaten >= 3) {
      this.hungry = false;
    }
  }

// isWhite() {
//   return false;
// }
//
// says(phrase) {
//   return `**;* ${phrase} *;**`
// }

}

module.exports = Dragon;
