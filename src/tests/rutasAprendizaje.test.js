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

    describe("GET Rutas", () => {
        test("Should respond with a 200 status code", async() => {
            const response = await request(app).get("/api/rutas/").send();
            expect(response.statusCode).toBe(200);
        })
        test("Should respond with an array of routes", async() => {
            const response = await request(app).get("/api/rutas/").send();
            expect(response.body).toBeInstanceOf(Array)
        })
        test("Should respond with a 200 status code only a route", async() => {
            const response = await request(app).get("/api/rutas/62735f0f299e2ca56a44ab7d").send();
            expect(response.statusCode).toBe(200);
        })
        test("Should respond wit a route", async () => {
            const response = await request(app).get("/api/rutas/62735f0f299e2ca56a44ab7d").send();
            expect(response.body).toBeDefined()
        })
    })
})

