import supertest from "supertest";

// Change to env variable
const request = supertest("http://localhost:3001");

const collectionPayload = {
  name: "Test Collection",
  products: [
    {
      id: 12,
    },
    {
      id: 13,
    },
  ],
  description: "Test Collection",
};

describe("collection", () => {
  describe("given collection exists", () => {
    beforeEach(async () => {
      await request.post("/api/collection").send(collectionPayload);
    });

    afterEach(async () => {
      await request.delete("/api/collection/test-collection");
    });

    describe("get collection route", () => {
      it("should return a 200", async () => {
        const handle = "test-collection";
        const response = await request.get(`/api/collection/${handle}`);
        expect(response.status).toBe(200);
      });
    });

    describe("delete collection route", () => {
      it("should return a 204", async () => {
        const response = await request.delete(
          "/api/collection/test-collection"
        );
        expect(response.status).toBe(204);
      });
    });

    describe("update collection route", () => {
      it("should return a 200", async () => {
        const response = await request.put("/api/collection/test-collection");
        expect(response.status).toBe(200);
      });
    });

    describe("create collection route", () => {
      it("should return a 409", async () => {
        const response = await request
          .post("/api/collection")
          .send(collectionPayload);
        expect(response.status).toBe(409);
      });
    });
  });

  describe("given collection does not exist", () => {
    describe("get collection route", () => {
      it("should return a 404", async () => {
        const badHandle = "non-existent-collection";
        const response = await request.get(`/api/collection/${badHandle}`);
        expect(response.status).toBe(404);
      });
    });

    describe("update collection route", () => {
      it("should return ", async () => {
        const updatedCollection = {
          price: 20.0,
        };
        const response = await request
          .put("/api/collection/test-collection")
          .send(updatedCollection);

        expect(response.status).toBe(404);
      });
    });

    describe("create collection route", () => {
      it("should return a 201", async () => {
        const response = await request
          .post("/api/collection")
          .send(collectionPayload);
        expect(response.status).toBe(201);
      });
    });
    describe("delete collection route", () => {
      it("should return a 204", async () => {
        const response = await request.delete(
          "/api/collection/test-collection"
        );
        expect(response.status).toBe(204);
      });
    });
  });
});
