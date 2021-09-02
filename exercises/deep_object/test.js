const deepObject = require("./index");

test("Empty object must print an empty string", () => {
  expect(deepObject()).toEqual([]);
  expect(deepObject("")).toEqual([]);
  expect(deepObject(null)).toEqual([]);
});

test("Deep object must print a non-empty string", () => {
  expect(deepObject({ a: "b" })).toEqual(["a,b"]);
  expect(deepObject({ a: "b", c: { d: "e" } })).toEqual(["a,b", "c,d,e"]);
  expect(deepObject({ a: "b", c: { d: "e" }, f: "g" })).toEqual(["a,b", "c,d,e", "f,g"]);
});
