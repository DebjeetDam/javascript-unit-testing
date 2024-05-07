import { it, expect, describe, expectTypeOf } from "vitest";
import {
  calculateDiscount,
  getCoupons,
  isPriceInRange,
  validateUserInput,
} from "../core";

describe("getCoupons", () => {
  //   assertions 1
  it("should return an array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons.length).toBeGreaterThan(0);
  });
  //   assertions 2
  it("should return a valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy(); // empty string
    });
  });
  // assertions 3
  it("should return a valid discount", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});
//new test suite
describe("calculateDiscount", () => {
  // positive test
  it("should return discounted price if given valid code", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9); //10% discount
    expect(calculateDiscount(10, "SAVE20")).toBe(8); //20% discount
  });
  // negative test (not necessary for TypeScript
  it("should handle non numeric price", () => {
    expect(calculateDiscount("10", "SAVE10")).toMatch(/invalid/i); //regex check invalid case insensitive
  });
  it("should handle negative price", () => {
    expect(calculateDiscount(-10, "SAVE10")).toMatch(/invalid/i); //regex check invalid case insensitive
  });
  it("should handle non string discount code", () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i); //regex check invalid case insensitive
  });
  it("should handle invalid discount code", () => {
    expect(calculateDiscount(10, "WRONG CODE")).toBe(10); //regex check invalid case insensitive
  });
});

describe("validateUserInput", () => {
  it("should return success", () => {
    expect(validateUserInput("Deb", 28)).toMatch(/success/i);
  });
  it("should return an Error if username not a str", () => {
    expect(validateUserInput(1, 28)).toMatch(/invalid/i);
  });
  it("should return an Error if username less 3 charac", () => {
    expect(validateUserInput("D", 28)).toMatch(/invalid/i);
  });
  it("should return an Error if age not a number", () => {
    expect(validateUserInput("DDam", "28")).toMatch(/invalid/i);
  });
  it("should return an Error if age is below 18", () => {
    expect(validateUserInput("DDam", 16)).toMatch(/invalid/i);
  });
  it("should return an Error if age is greater 100", () => {
    expect(validateUserInput("DDam", 1001)).toMatch(/invalid/i);
  });
  it("should return an Error if usrname/age is ginvalid", () => {
    expect(validateUserInput("", 0)).toMatch(/invalid username/i);
    expect(validateUserInput("", 0)).toMatch(/invalid age/i);
  });
});

describe("isProceInRange", () => {
  it("should return false when price outside range", () => {
    expect(isPriceInRange(-10, 0, 100)).toBe(false);
    expect(isPriceInRange(200, 0, 100)).toBe(false);
  });
  it("should return true when price within range", () => {
    // boundary testing
    expect(isPriceInRange(0, 0, 100)).toBe(true);
    expect(isPriceInRange(100, 0, 100)).toBe(true);
  });
  it("should return true when price within range", () => {
    expect(isPriceInRange(50, 0, 100)).toBe(true);
  });
});
