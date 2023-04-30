import supertest from "supertest";

const request = supertest("http://localhost:3001");

describe("product", () => {
  describe("get product route", () => {
    describe("given the product does exist", () => {
      it("should return a 200", async () => {
        const productId = 10;
        const response = await request.get(`/api/product/${productId}`);
        expect(response.statusCode).toBe(200);
      });
    });

    describe("given the product does not exist", () => {
      it("should return a 404", async () => {
        const productId = 9;
        const response = await request.get(`/api/product/${productId}`);
        expect(response).toBe(null);
      });
    });
  });
});
