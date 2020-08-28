const supertest = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("GET /api/campaigns", () => {
    it("should return 401, you shall not pass!", () => {
      return supertest(server)
        .get("/api/campaigns")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it("should return you: shall not pass!", () => {
      return supertest(server).get("/api/campaigns").expect({ you: "shall not pass!" });
    });
  });
});