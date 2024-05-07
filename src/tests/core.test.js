import { it, expect, describe, expectTypeOf } from "vitest";
import { calculateDiscount, getCoupons } from "../core";

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
