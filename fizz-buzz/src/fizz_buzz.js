class FizzBuzz {
  execute() {
    return [...Array(100).keys()].map(item => this.checkNumber(item))
  }

  checkNumber(number) {
    if(number%15 === 0) {
      return 'FizzBuzz'
    }
  }
}

module.exports = FizzBuzz;
