import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../intro";

//to create test
// Arrange
// const a = 2;
// const b = 1;
// Act
// const result = max(a, b);
// Assert
// expect(result).toBe(2);

// Suite 1 toBe -> matcher
describe("max", () => {
  it("should return first arg if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return second arg if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return first arg if it is equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});
// Suite 2
describe("fizzbuzz", () => {
  it("should return FizzBuzz if arg is div by 3 & 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if arg is div by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return Buzz if arg is div by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return arg as str if not div by 3 or 5", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});
//Suite 3
describe("calcAverage", () => {
  it("should return NaN if empty[]", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should return avg if has one element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should return avg if has two element", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should return avg if has three element", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
