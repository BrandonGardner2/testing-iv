const request = require("supertest");
const db = require("../data/dbConfig");
const Hobbits = require("./hobbitsModel");
const server = require("../api/server");

describe("Hobbits Model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });

  it("Returns the new hobbit provided on insertion", async () => {
    const hobbit = {
      name: "Bobby"
    };
    const dbReturn = await Hobbits.insert(hobbit);
    expect(dbReturn).toBeTruthy();
    expect(dbReturn.name).toBe("Bobby");
  });
});
