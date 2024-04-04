import {  expect, test } from "@jest/globals";
import sortObjectsByKey from "./sortObjectsByKey";

const testData = [
  {
    stringKey: "ghi",
    numberKey: 3,
  },
  {
    stringKey: "abc",
    numberKey: 4,
  },
  {
    stringKey: "def",
    numberKey: 2,
  },
  {
    stringKey: "jkl",
    numberKey: 1,
  },
];

test("Sorts array ascendingly by string key", () => {
  expect(sortObjectsByKey(testData, "stringKey")).toStrictEqual([
    {
      stringKey: "abc",
      numberKey: 4,
    },
    {
      stringKey: "def",
      numberKey: 2,
    },
    {
      stringKey: "ghi",
      numberKey: 3,
    },
    {
      stringKey: "jkl",
      numberKey: 1,
    },
  ]);
});

test("Sorts array descendingly by string key", () => {
  // @ts-ignore
  expect(sortObjectsByKey(testData, "stringKey", "DESC")).toStrictEqual([
    {
      stringKey: "jkl",
      numberKey: 1,
    },
    {
      stringKey: "ghi",
      numberKey: 3,
    },
    {
      stringKey: "def",
      numberKey: 2,
    },
    {
      stringKey: "abc",
      numberKey: 4,
    },
  ]);
});

test("Sorts array ascendingly by number key", () => {
  expect(sortObjectsByKey(testData, "numberKey")).toStrictEqual([
    {
      stringKey: "jkl",
      numberKey: 1,
    },
    {
      stringKey: "def",
      numberKey: 2,
    },
    {
      stringKey: "ghi",
      numberKey: 3,
    },
    {
      stringKey: "abc",
      numberKey: 4,
    },
  ]);
});

test("Sorts array descendingly by number key", () => {
  // @ts-ignore
  expect(sortObjectsByKey(testData, "numberKey", "DESC")).toStrictEqual([
    {
      stringKey: "abc",
      numberKey: 4,
    },
    {
      stringKey: "ghi",
      numberKey: 3,
    },
    {
      stringKey: "def",
      numberKey: 2,
    },
    {
      stringKey: "jkl",
      numberKey: 1,
    },
  ]);
});

test("Throws an error if the attribute is not present at least once", () => {
  // @ts-ignore
  expect(() => sortObjectsByKey(testData, "missingKey")).toThrowError(
    "Attribute is not present in any of the objects inside the array."
  );
});
