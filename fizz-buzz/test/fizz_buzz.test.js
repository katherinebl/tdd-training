const FizzBuzz = require("../src/fizz_buzz");

describe("FizzBuzz", () => {
  it("return an array", () => {
    const fizzBuzz = new FizzBuzz(); //Given

    const result = fizzBuzz.execute(); //When

    expect(Array.isArray(result)).toBe(true); //Then
  });
  it("return an array of 100 items", () => {
    const fizzBuzz = new FizzBuzz();

    const result = fizzBuzz.execute();

    expect(result.length).toBe(100);
  });
});
