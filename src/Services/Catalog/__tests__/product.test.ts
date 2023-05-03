import supertest from "supertest";

// Change to env variable
const request = supertest("http://localhost:3001");

const productPayload = {
  name: "Test Product",
  price: 79.99,
  imageUrl: "https://comme-cat-beds.s3.amazonaws.com/cat-bed-4.webp",
  description:
    "Durable cat bed with high walls for privacy. Soft cushion for ultimate comfort. Available in various sizes. Keep your cat snug & secure.",
  handle: "test-product",
  url: "/product/test-product",
};

describe("product", () => {
  describe("given product exists", () => {
    beforeEach(async () => {
      await request.post("/api/product").send(productPayload);
    });

    afterEach(async () => {
      await request.delete("/api/product/test-product");
    });

    describe("get product route", () => {
      it("should return a 200", async () => {
        const handle = "test-product";
        const response = await request.get(`/api/product/${handle}`);
        expect(response.status).toBe(200);
      });
    });

    describe("delete product route", () => {
      it("should return a 204", async () => {
        const response = await request.delete("/api/product/test-product");
        expect(response.status).toBe(204);
      });
    });

    describe("update product route", () => {
      it("should return a 200", async () => {
        const response = await request.put("/api/product/test-product");
        expect(response.status).toBe(200);
      });
    });

    describe("create product route", () => {
      it("should return a 409", async () => {
        const response = await request
          .post("/api/product")
          .send(productPayload);
        expect(response.status).toBe(409);
      });
    });
  });

  describe("given product does not exist", () => {
    describe("get product route", () => {
      it("should return a 404", async () => {
        const badHandle = "non-existent-product";
        const response = await request.get(`/api/product/${badHandle}`);
        expect(response.status).toBe(404);
      });
    });

    describe("update product route", () => {
      it("should return ", async () => {
        const updatedProduct = {
          price: 20.0,
        };
        const response = await request
          .put("/api/product/test-product")
          .send(updatedProduct);

        expect(response.status).toBe(404);
      });
    });

    describe("create product route", () => {
      it("should return a 201", async () => {
        const response = await request
          .post("/api/product")
          .send(productPayload);
        expect(response.status).toBe(201);
      });
    });
    describe("delete product route", () => {
      it("should return a 204", async () => {
        const response = await request.delete("/api/product/test-product");
        expect(response.status).toBe(204);
      });
    });
  });
});
