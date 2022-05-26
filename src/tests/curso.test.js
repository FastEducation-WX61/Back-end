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

    describe("GET Cursos", () => {
        test("Should respond with a 200 status code", async() => {
            const response = await request(app).get("/api/cursos/").send();
            expect(response.statusCode).toBe(200);
        })
        test("Should respond with an array of courses", async() => {
            const response = await request(app).get("/api/cursos/").send();
            expect(response.body).toBeInstanceOf(Array)
        })
        test("Should respond with a 200 status code only a route", async() => {
            const response = await request(app).get("/api/cursos/62736e5a7f09f281d37858cc").send();
            expect(response.statusCode).toBe(200);
        })
        test("Should respond wit a route", async () => {
            const response = await request(app).get("/api/cursos/62736e5a7f09f281d37858cc").send();
            expect(response.body).toBeDefined()
        })
    })


})

