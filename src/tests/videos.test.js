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

    describe("GET Videos", () => {
        test("Should respond with a 200 status code", async() => {
            const response = await request(app).get("/api/videos/").send();
            expect(response.statusCode).toBe(200);
        })
        test("Should respond with an array of videos", async() => {
            const response = await request(app).get("/api/videos/").send();
            expect(response.body).toBeInstanceOf(Array)
        })
        test("Should respond with a 200 status code only a video", async() => {
            const response = await request(app).get("/api/videos/628f1fd9bea2fd0b04e97a13").send();
            expect(response.statusCode).toBe(200);
        })
        test("Should respond wit a video", async () => {
            const response = await request(app).get("/api/videos/628f1fd9bea2fd0b04e97a13").send();
            expect(response.body).toBeDefined()
        })
    })
})

