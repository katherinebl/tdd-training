class FizzBuzz {
  execute() {
    return [...Array(100).keys()].map(item => this.checkNumber(item))
  }

  checkNumber(number) {
    if(number%15 === 0) {
      return 'FizzBuzz'
    }
    if(number%5 === 0) {
      return 'Buzz'
    }
    if(number%3 === 0) {
      return 'Fizz'
    }
    return number
  }
}

module.exports = FizzBuzz;
