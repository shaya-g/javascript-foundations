class Hobbit {
  constructor({ name: name },) {
    this.name = name;
    this.age = 0;
    this.adult = false;

  }

  celebrateBirthday() {
    this.age++;
  }

  isAdult() {
    if (this.age >= 33) {
      return this.adult = true;
    }
}

module.exports = Hobbit;
