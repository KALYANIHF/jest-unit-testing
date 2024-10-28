const sum = require("./sum");
test("two plus two is eual to four", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toStrictEqual({ one: 1, two: 2 });
});
