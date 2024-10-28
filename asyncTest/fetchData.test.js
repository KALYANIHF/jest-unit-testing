const { fetchData, jsonPlaceHolderFun } = require("./fetchData");
test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the sould be an object", () => {
  jsonPlaceHolderFun("https://jsonplaceholder.typicode.com/users").then(
    (data) => {
      expect(data).toBeDefined();
      expect(data).not.toBeNull();
      expect(data).toBeInstanceOf(Array);
      expect(data).toHaveProperty("id");
      expect(data).toHaveProperty("title");
      expect(data).toHaveProperty("userId");
      expect(data).toHaveProperty("completed");
    }
  );
});
