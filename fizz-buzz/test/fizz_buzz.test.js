const FizzBuzz = require("../src/fizz_buzz");

describe("FizzBuzz", () => {
  it("return an array", () => {
    const fizzBuzz = new FizzBuzz(); //Given

    const result = fizzBuzz.execute(); //When

    expect(result).toStrictEqual([]); //Then
  });
});
