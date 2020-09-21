const request = require("supertest");
const server = require("../api/server.js");
const db = require("../database/dbConfig.js");

describe("POST register", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("create new account", async () => {
    const res = await request(server).post("/api/auth/register").send({
      username: "travisgent",
      password: "mellon"
    });

    const users = await db("users");

    expect(users).toHaveLength(1);
  });

  it("create new account without password. expects to return 400", async () => {
    const res = await request(server).post("/api/auth/register").send({
      username: "travisgent"
    })
    .then(res => {
      expect(res.status).toBe(400);
    });
  });
});

describe("POST login", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });
  
    it("create new account then logs in with it", async () => {
      const res = await request(server).post("/api/auth/register").send({
        username: "travisgent",
        password: "mellon"
      });
  
      const resp = await request(server).post("/api/auth/login").send({
        username: "travisgent",
        password: "mellon"
      })
      .then(resp => {
        expect(resp.status).toBe(200)
      })
    });

    it("create new account then logs in without password", async () => {
        const res = await request(server).post("/api/auth/register").send({
          username: "travisgent",
          password: "mellon"
        });
    
        const resp = await request(server).post("/api/auth/login").send({
          username: "travisgent"
        })
        .then(resp => {
          expect(resp.status).toBe(400)
        })
      });
  });