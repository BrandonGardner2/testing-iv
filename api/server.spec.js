const request = require("supertest");
const server = require("./server");

// testing endpoints
//returns correct status code

describe("Server.js testing", () => {
  it("returns 200 OK from get /", () => {
    return request(server)
      .get("/")
      .expect(200);
  });

  it("should return json", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.type).toBe("application/json");
      });
  });

  it("should return { api: up }", async () => {
    const response = await request(server).get("/");
    expect(response.body).toEqual({ api: "up" });
  });
});
