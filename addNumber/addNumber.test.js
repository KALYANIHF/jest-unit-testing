const addNumber = require("./addNumber");
test("add positive numbers not to be 0", () => {
  expect(addNumber([1, 2, 3, 4], [5, 6, 7, 8])).not.toBe(0);
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
  // for floating point numbers use toBeCloseTo
  expect(value).toBeCloseTo(4.0000000000000001);
});

test("there is no I in team", () => {
  const nam = "alpha beta gamma";
  expect(nam).not.toMatch(/I/i);
});

test("should not contain stop words", () => {
  const name = "alpha beta stop gamma";
  expect(name).toMatch(/stop/i);
});

test("check if an iterable object contains a particular item", () => {
  const arr = ["alpha", "beta", "gamma"];
  expect(arr).toContain("beta");
  expect(new Set(arr)).toContain("beta");
});
