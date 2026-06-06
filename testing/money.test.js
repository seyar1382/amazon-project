import formatCurrency from "../scripts/utils/money";
import { describe, it, expect } from "vitest";

describe("formatCurrecny", () => {
  it("cents to dollars", () => {
    expect(formatCurrency(251)).toBe("2.51");
  });
  it("dealing with zero", () => {
    expect(formatCurrency(0)).toBe("0.00");
  });
  it("rounds up to the nearest cents", () => {
    expect(formatCurrency(2000.5)).toBe("20.01");
  });
  it("rounds down", () => {
    expect(formatCurrency(2000.4)).toBe("20.00");
  });
});
