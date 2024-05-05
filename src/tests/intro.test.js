import { describe, test, it, expect } from "vitest";
import { max } from "../intro";

//to create test
// Arrange
// const a = 2;
// const b = 1;
// Act
// const result = max(a, b);
// Assert
// expect(result).toBe(2);
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
