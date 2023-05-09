import supertest from "supertest";

// Change to env variable
const request = supertest("http://localhost:3002");

describe("cart", () => {
  describe("get cart route", () => {
    describe("given first visit", () => {
      it("should return an empty cart", async () => {
        const response = await request.get("/api/cart");
        const { items, itemCount, totalPrice } = response.body;

        expect(items.length).toBe(0);
        expect(itemCount).toBe(0);
        expect(totalPrice).toBe(0);
        expect(response.status).toBe(200);
      });
    });

    describe("given visited before", () => {
      let cartId;

      beforeEach(async () => {
        const testCart = {
          items: [
            {
              id: "11",
              quantity: 1,
            },
          ],
        };

        const response = await request.post("/api/cart").send(testCart);

        cartId = response.headers["set-cookie"];
      });

      it("should return previous cart", async () => {
        const response = await request.get("/api/cart").set("Cookie", cartId);

        const { items, itemCount, totalPrice } = response.body;

        expect(response.status).toBe(200);
        expect(itemCount).toBe(1);
        expect(items.length).toBe(1);
        expect(items[0]["id"]).toBe(11);
        expect(totalPrice).toBe(51);
      });
    });
  });

  describe("delete cart route", () => {
    it("should return a 204", async () => {
      const response = await request.delete("/api/cart");

      expect(response.status).toBe(204);
    });
  });
});
