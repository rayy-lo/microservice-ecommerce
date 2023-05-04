import supertest from "supertest";

const request = supertest("http://localhost:3005");

describe("register", () => {
  describe("given the user already exists", () => {
    it("should return a status code 200", async () => {
      const user = {
        firstName: "Raymond",
        lastName: "Lo",
        email: "raymond@yahoo.com",
        password: "password",
      };

      const response = await request.post("/api/register").send(user);

      expect(response.status).toBe(200);
    });
  });

  describe("given the user does not exist", () => {
    //TODO: clean up after creating new user

    it("should return a status code 201", async () => {
      const newUser = {
        firstName: "test",
        lastName: "user",
        email: "new@hotmail.com",
        password: "password",
      };

      const response = await request.post("/api/register").send(newUser);

      expect(response.status).toBe(201);
    });
  });
});
