const request = require("supertest");
const mongoose = require("mongoose");

const Server = require("../models/Server");
const server = new Server();
const app = server.getApp();

require("dotenv").config();

describe("Testing App", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODBURI);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    describe("GET Ramas", () => {
        test("Should respond with a 200 status code", async() => {
            const response = await request(app).get("/api/ramas/").send();
            expect(response.statusCode).toBe(200);
        })
        test("Should respond with an array of ramas", async() => {
            const response = await request(app).get("/api/ramas/").send();
            expect(response.body).toBeInstanceOf(Array)
        })
        test("Should respond with a 200 status code only a rama", async() => {
            const response = await request(app).get("/api/ramas/62748cc180cb5c2102c451fe").send();
            expect(response.statusCode).toBe(200);
        })
        test("Should respond wit a rama", async () => {
            const response = await request(app).get("/api/ramas/62748cc180cb5c2102c451fe").send();
            expect(response.body).toBeDefined()
        })
    })


})

