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
  it("return FizzBuzz for multiples of 15", () => {
    const fizzBuzz = new FizzBuzz();

    const result = fizzBuzz.execute();

    expect(result[15]).toBe('FizzBuzz')
    expect(result[30]).toBe('FizzBuzz')
    expect(result[45]).toBe('FizzBuzz')
  })
  it("return Buzz for multiples of 5", () => {
    const fizzBuzz = new FizzBuzz();

    const result = fizzBuzz.execute();

    expect(result[5]).toBe('Buzz')
    expect(result[10]).toBe('Buzz')
    expect(result[50]).toBe('Buzz')
  })
});
