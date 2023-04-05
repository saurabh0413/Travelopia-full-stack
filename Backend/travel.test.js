const request = require("supertest");

const { Travel } = require("./model/Travel.model");
const { app } = require(".");

describe("Travel Endpoints", () => {
  beforeAll(async () => {
    await Travel.deleteMany({});
  });

  describe("POST /travelinfo", () => {
    it("should add new travel data to the database", async () => {
      const res = await request(app)
        .post("/travelinfo")
        .send({
          Name: "virat",
          Email: "virat@virat.com",
          Location: "banglore",
          No_of_travellers: 2,
          Budget: 1000,
        })
        .expect(201);

      expect(res.body).toHaveProperty("_id");
      expect(res.body.Name).toBe("virat");
      expect(res.body.Email).toBe("virat@virat.com");
      expect(res.body.Location).toBe("banglore");
      expect(res.body.No_of_travellers).toBe(2);
      expect(res.body.Budget).toBe(1000);
    });
  });

  describe("GET /travelinfo", () => {
    beforeAll(async () => {
      await Travel.create({
        Name: "virat2",
        Email: "virat2@virat2.com",
        Location: "delhi",
        No_of_travellers: 3,
        Budget: 1500,
      });
    });

    it("should get all travel data from the database", async () => {
      const res = await request(app).get("/travelinfo").expect(200);

      expect(res.body).toHaveLength(2);
      expect(res.body[1]).toHaveProperty("_id");
      expect(res.body[1].Name).toBe("virat2");
      expect(res.body[1].Email).toBe("virat2@virat2.com");
      expect(res.body[1].Location).toBe("delhi");
      expect(res.body[1].No_of_travellers).toBe(3);
      expect(res.body[1].Budget).toBe(1500);
    });
  });
});
