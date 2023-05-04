import supertest from "supertest";

const request = supertest("http://localhost:3005");

describe("login", () => {
  describe("given correct credentials", () => {
    it("should return status 200", async () => {
      const credentials = {
        email: "raymond@yahoo.com",
        password: "password",
      };

      const response = await request.post("/api/login").send(credentials);

      expect(response.status).toBe(200);
    });
  });

  describe("given incorrect credentials", () => {
    it("should return status code 401", async () => {
      const badCredentials = {
        email: "bademail@gmail.com",
        password: "password",
      };

      const response = await request.post("/api/login").send(badCredentials);

      expect(response.status).toBe(401);
    });
  });
});
