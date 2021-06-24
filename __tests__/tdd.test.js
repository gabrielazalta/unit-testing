const User = require("../lib/User.js");

test("create a new user with no parameter", () => {
  const user = new User();

  expect(user).toEqual(expect.any(Object));
});

test("create a new user with first name", () => {
  const firstName = "Jon";
  const user = new User(firstName);

  expect(user.firstName).toEqual("Jon");
});

test("create a new user with last name", () => {
  const lastName = "Doe";
  const user = new User("Jon", lastName);

  expect(user.lastName).toEqual("Doe");
});

test("create a new user with email", () => {
  const email = "a@a.com";
  const user = new User("Jon", "Doe", email);

  expect(user.email).toEqual("a@a.com");
});

test("returns first name via getFirstName function", () => {
  const user = new User("Jon", "a@a.com");

  expect(user.getFirstName()).toEqual("Jon");
});

test("returns last name via getLastName function", () => {
  const user = new User("Jon", "Doe", "a@a.com");

  expect(user.getLastName()).toEqual("Doe");
});

test("returns email via getEmail function", () => {
  const user = new User("Jon", "Doe", "a@a.com");

  expect(user.getEmail()).toEqual("a@a.com");
});
